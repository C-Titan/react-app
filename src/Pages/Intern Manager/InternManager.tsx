import MediaContainer from "@/Components/Base/MediaContainer";
import { Button } from "@/Components/Base/Button";

import { useState } from "react";

import { BiBell, BiChat, BiMenu, BiSearch } from "react-icons/bi";
import {
	FaBox,
	FaInbox,
	FaFoursquare,
	FaQuestionCircle,
	FaCog,
	FaAngleLeft,
	FaAngleRight,
} from "react-icons/fa";
//

//#region CRUD Functions
// export interface Intern {
//     name: string;
//     color: "red"
// 		| "orange"
// 		| "yellow"
// 		| "lime"
// 		| "green"
// 		| "teal"
// 		| "cyan"
// 		| "blue"
// 		| "indigo"
// 		| "purple"
// 		| "violet"
// 		| "magenta";
// }

// export function LoadInterns(): Intern[] {
// 	try {
// 		// const raw = localStorage.getItem("m_Interns");=
// 		const file = "./interns.json";
// 		const reader = new FileReader();

// 		reader.onload = (e) => {
// 			try {
// 				const data = JSON.parse("text");
// 				console.log("Here you go: ", data)
// 			} catch(err) {
// 				console.error("Had some trouble grabbing your data 😢")
// 			}
// 		};
// 		reader.readAsText(new Blob([JSON.stringify(file, null, 2)], { type: "application/json" }));
// 		const raw = localStorage.getItem("m_Interns");
// 		return raw ? JSON.parse(raw) : [];
// 	} catch {
// 		return [];
// 	}
// }

// export function SaveInterns(interns: Intern[]) {
// 	localStorage.setItem("m_Interns", JSON.stringify(interns));
// }

// export function CreateIntern(
//     name: string,
//     color: "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "cyan" | "blue" | "indigo" | "purple" | "violet" | "magenta",
// ): Intern {
// 	const interns = LoadInterns();
// 	const newIntern: Intern = {
//         name: name,
//         color: color
// 	};
// 	interns.push(newIntern);
// 	SaveInterns(interns);
// 	return newIntern;
// }

// export function GetAllInterns(): Intern[] {
// 	return LoadInterns();
// }

// export function updateIntern(name: string, patch: Partial<Intern>): Intern | null {
// 	const interns = LoadInterns();
// 	const idx = interns.findIndex((t) => t.name === name);
// 	if (idx === -1) return null;
// 	interns[idx] = { ...interns[idx], ...patch };
// 	SaveInterns(interns);
// 	return interns[idx];
// }

// function DeleteIntern(name: string) {
// 	const intern = LoadInterns().filter((t) => t.name === name);
// 	SaveInterns(intern);
// }
//#endregion
//

//#region Components
//#region Side Bar
const SideBar = () => {
	const profilePic: string = `https://thispersondoesnotexist.com/`;
	const userName: string = "Joey Drew";
	const userJob: string = "Admin";

	return (
		<>
			<Button id="SideBarToggle">
				<BiMenu />
			</Button>

			<aside id="SideBar">
				<div id="SideBarProfile">
					<MediaContainer.Iframe
						id="ProfilePic"
						mediaSource={profilePic}
					/>
					<div id="ProfileText">
						<h2>{userName}</h2>
						<p>{userJob}</p>
					</div>
				</div>

				<div id="SideBarMenu">
					<ul id="MainMenu">
						<li>
							<MenuItem
								name="Overview"
								icon={<FaBox />}
								href=""
							/>
						</li>
						<li>
							<MenuItem name="Inbox" icon={<FaInbox />} href="" />
						</li>
						<li>
							<MenuItem
								name="Placeholder"
								icon={<FaFoursquare />}
								href=""
							/>
						</li>
						<li>
							<MenuItem
								name="Placeholder"
								icon={<FaFoursquare />}
								href=""
							/>
						</li>
					</ul>

					<hr />

					<ul id="OtherMenu">
						<li>
							<MenuFolder name="Interns" icon={<FaBox />}>
								<ul>
									<li>
										<MenuItem
											name="Overview"
											icon={<FaBox />}
										/>
									</li>
									<li>
										<MenuItem
											name="Inbox"
											icon={<FaInbox />}
										/>
									</li>
									<li>
										<MenuItem
											name="Placeholder"
											icon={<FaFoursquare />}
										/>
									</li>
									<li>
										<MenuItem
											name="Placeholder"
											icon={<FaFoursquare />}
										/>
									</li>
								</ul>
							</MenuFolder>
						</li>
					</ul>
				</div>

				<div id="SideBarFooter">
					<Button className="SideBarFooterButton"
						href=""
						target="_self"
					>
						<FaQuestionCircle />
					</Button>
					<Button className="SideBarFooterButton"
						href=""
						target="_self"
					>
						<FaCog />
					</Button>
				</div>
			</aside>
		</>
	);
};

interface MenuItemProps {
	name: string;
	icon: React.ReactNode;
	href?: string;
	target?: "_blank" | "_parent" | "_top" | "_self";
	children?: React.ReactNode;
}

const MenuItem = ({ name, icon, href, target = "_self" }: MenuItemProps) => {
	return (
		<a className="MenuItem" href={href} target={target}>
			<span>{icon}</span>
			{name}
		</a>
	);
};

const MenuFolder = ({ name, icon, children }: MenuItemProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<p
				className="MenuItem"
				onClick={() => setIsOpen(!isOpen)}
				ref={(el) => {
					if (el && isOpen && children) {
						const handleClickOutside = (event: MouseEvent) => {
							if (!el.contains(event.target as Node))
								setIsOpen(false);
						};
						document.addEventListener(
							"mousedown",
							handleClickOutside
						);
						return () => {
							document.removeEventListener(
								"mousedown",
								handleClickOutside
							);
						};
					}
				}}
			>
				<span>{icon}</span>
				{name}
			</p>
			<div className="MenuFolderChildren">children</div>
		</>
	);
};
//#endregion

//#region Top Bar
const TopBar = () => {
	const pageTitle = "Dashboard";
	return (
		<div id="TopBar">
			<div id="NavBar">
				<PageLocation />
				<OtherLinks />
			</div>
			<h1>{pageTitle}</h1>
		</div>
	);
};

const PageLocation = () => {
	// File System??
	return (
		<div id="PageLocation">
			<a href=""> Folder 1 </a> <p>&nbsp; \ &nbsp; </p>
			<a href=""> Folder 2 </a> <p>&nbsp; \ &nbsp; </p>
			<a href=""> Folder 3 </a> <p>&nbsp; \ &nbsp; </p>
			<p>Page</p>
		</div>
	);
};

const OtherLinks = () => {
	return (
		<ul id="OtherLinks">
			<li>
				<a href="">Pricing</a>
			</li>
			<li>
				<a href="">Resources</a>
			</li>
			<li>
				<a href="">Contact Us</a>
			</li>
		</ul>
	);
};
//#endregion

//#region Main Page
const Dashboard = () => {
	const [internListViewStyle, setInternListViewStyle] = useState<
		"full" | "mini"
	>("full");
	const [statisticsViewStyle, setStatisticsViewStyle] = useState<
		"full" | "mini"
	>("mini");

	return (
		<div id="Dashboard">
			<ActionsBar />
			<InternListView viewStyle={internListViewStyle} />
			<StatisticsView viewStyle={statisticsViewStyle} />
		</div>
	);
};

const ActionsBar = () => {
	return (
		<div id="ActionsBar">
			<Button id="QuickActionsButton">Quick Actions</Button>
		</div>
	);
};

type MainContentProps = { viewStyle: "full" | "mini" };

//#region InternList
const InternListView = ({ viewStyle }: MainContentProps) => {
	if (viewStyle === "mini") return;

	const [filteredList, setFilteredList] = useState<string[]>([]);
	const handleAddFilter = (newFilter: string) => {
		if (!filteredList.includes(newFilter)) {
			setFilteredList((prev) => [...prev, newFilter]);
		}
	};
	const handleRemoveFilter = (filter: string) => {
		setFilteredList((prev) => prev.filter((f) => f !== filter));
	};

	const [internList, setInternList] = useState<Intern[]>([]);
	const filteredInternList = () => {
		// Filter by tag or whatever
		return internList;
	};

	const example1: Intern = {
		tags: ["Ben", "Doe"],
		name: "Jack Beans",
		profilePic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
		status: "working",
		tasks: [
			{ index: "0", name: "Do a thing", progress: "pending", tags: [] },
			{
				index: "1",
				name: "Do another thing",
				progress: "pending",
				tags: [],
			},
			{
				index: "2",
				name: "Do a third thing",
				progress: "pending",
				tags: [],
			},
		],
		chats: { storagePath: "", logs: [], unread: 0 },
		notice: [],
	};
	const example2: Intern = {
		tags: ["Ben", "Wyatt"],
		name: "Fred Derby",
		profilePic: `https://robohash.org/${Math.random()}`,
		status: "offline",
		tasks: [
			{ index: "0", name: "Do a thing", progress: "complete", tags: [] },
			{ index: "1", name: "Do another thing", progress: "complete", tags: [] },
			{ index: "2", name: "Do a third thing", progress: "complete", tags: [] },
			{ index: "3", name: "Do a forth thing", progress: "complete", tags: [] },
			{ index: "4", name: "Do a fifth thing", progress: "complete", tags: [] },
			{ index: "5", name: "Do a 6th thing", progress: "complete", tags: [] },
			{ index: "6", name: "Do a 7th thing", progress: "pending", tags: [] },
			{ index: "7", name: "Do an 8th thing", progress: "pending", tags: [] },
			{ index: "8", name: "Do a 9th thing", progress: "pending", tags: [] },
			{ index: "9", name: "Do a last thing", progress: "pending", tags: [] },
		],
		chats: {
			storagePath: "",
			logs: [
				{
					senderId: "0",
					status: "read",
					message: "I have completed some tasks.",
					timeSent: "",
				},
				{
					senderId: "0",
					status: "received",
					message: "I'm having trouble with the second one",
					timeSent: "",
				},
			],
			unread: 1,
		},
		notice: [
			{ message: "Task 1 complete", source: "Tasks" },
			{ message: "Task 2 complete", source: "Tasks" },
		],
	};
	const example3: Intern = {
		tags: ["James", "Doe"],
		name: "Games Bookstore",
		profilePic: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
		status: "inactive",
		tasks: [
			{ index: "0", name: "Do a thing", progress: "complete", tags: [] },
			{
				index: "1",
				name: "Do a second thing",
				progress: "complete",
				tags: [],
			},
		],
		chats: {
			storagePath: "",
			logs: [
				{
					senderId: "0",
					status: "read",
					message: "I have completed some tasks.",
					timeSent: "",
				},
				{
					senderId: "0",
					status: "read",
					message: "I'm having trouble with the second one",
					timeSent: "",
				},
			],
			unread: 0,
		},
		notice: [
			{ message: "Task 1 complete", source: "Tasks" },
			{ message: "Task 2 complete", source: "Tasks" },
		],
	};

	// const [internSelectList, setInternSelectList] = useState<Intern[]>([]);
	// Will get back to this...

	return (
		<div id="InternListView">
			<div className="SearchByFilters">
				<FilteredList
					filteredList={filteredList}
					onRemoveFilter={handleRemoveFilter}
				/>
				<SearchBar onSearch={handleAddFilter} />
			</div>

			<ul id="InternList">
				<li><InternObj internRef={example1} /></li>
				<li><InternObj internRef={example2} /></li>
				<li><InternObj internRef={example3} /></li>
				{internList.length > 0 ? (
					internList.map((i) => (
						<li><InternObj internRef={i} /></li>
					))
				) : (
					<li className="EmptyList"> Wow Such empty... </li>
				)}
			</ul>
		</div>
	);
};

type FilteredListProps = {
	filteredList: string[];
	onRemoveFilter: (filter: string) => void;
};
const FilteredList = ({ filteredList, onRemoveFilter }: FilteredListProps) => {
	const [showFilters, setShowFilters] = useState<boolean>(false);

	return (
		<div className="Filters">
			<ul className={showFilters ? "expanded" : ""}>
				{filteredList.length > 0 &&
					filteredList.map((f) => (
						<li className="item FilterItem" key={f}>
							<p onClick={() => onRemoveFilter(f)}>
								{" "}
								<AiOutlineClose /> &nbsp; #{f}{" "}
							</p>
						</li>
					))}
			</ul>

			<Button
				className="FilterButton"
				variant="secondary"
				onClick={() => setShowFilters(!showFilters)}
			>
				{showFilters ? (
					<FaAngleLeft />
				) : (
					<>
						Filters <FaAngleRight />
					</>
				)}
			</Button>
		</div>
	);
};

type SearchBarProps = {
	label?: string;
	onSearch: (filter: string) => void;
};
const SearchBar = ({ label = "Search...", onSearch }: SearchBarProps) => {
	const [value, setValue] = useState<string>("");
	return (
		<form
			className="SearchBar"
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(value.trim().toLowerCase());
				setValue("");
			}}
		>
			{/* <label htmlFor="">{label}</label> */}
			<input
				className="SearchBarField"
				placeholder={label}
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button className="SearchBarButton" variant="ghost" type="submit">
				<BiSearch />
			</Button>
		</form>
	);
};

type InternObjProps = {
	internRef: Intern;
};
const InternObj = ({ internRef }: InternObjProps) => {
	const [showFullDetails, setShowFullDetails] = useState<boolean>(false);

	let _completePerc: number = 0;
	internRef.tasks.forEach((t) => {
		if (t.progress === "complete") _completePerc += 1;
	});
	const overallProgress: number = _completePerc * 100 / internRef.tasks.length;

	return (
		<div className="InternObj">
			<MediaContainer.Image
				className="InternObjPfp"
				alt={internRef.name + " Profile"}
				mediaSource={internRef.profilePic}
			/>

			<div className="InternObjContent">
				<div className="ContentMain"
					onClick={() => setShowFullDetails(!showFullDetails)}
					ref={(el) => {
						if (el && showFullDetails) {
							const handleClickOutside = (event: MouseEvent) => {
								if (!el.contains(event.target as Node))
									setShowFullDetails(false);
							};
							document.addEventListener("mousedown", handleClickOutside);
							return () => {
								document.removeEventListener(
									"mousedown",
									handleClickOutside
								);
							};
						}
					}}
				>
					<div className="InternObjTitleBar">
						<p className="name">{internRef.name}</p>
						<p className={"status " + internRef.status}>
							●{internRef.status}
						</p>
						{!showFullDetails && ( <>
							<p className="progress">
								progress: {overallProgress}%
							</p>
							<Button className="icon" variant="secondary">
								<BiBell />
								<p>{internRef.notice.length}</p>
							</Button>
							<Button className="icon" variant="secondary">
								<BiChat />
								<p>{internRef.chats.unread}</p>
							</Button>
						</>)}
					</div>

					{showFullDetails && internRef.tasks.length > 0 && (
						<div className="InternObjTaskList">
							<p className="progress">Task Progress: {overallProgress}%</p>
							<ul className="ContentTaskList">
								{internRef.tasks.splice(0, 5).map((t) => (
									<li className="ContentTaskItem" key={t.index}>
										<p className="progress">{t.name}</p>
										<p className="progress">
											{t.progress.toString()}
										</p>
									</li>
								))}
							</ul>
							<div className="fade" />
						</div>
					)}
				</div>

				{showFullDetails && (
					<div className="ContentNotice">
						<p className="progress">Notice ({internRef.notice.length})
						</p>
						<ul>
							{internRef.notice.map((n) => (
								<li className="ContentTaskItem" key={n.message}>
									<p className="progress">{n.message}</p>
								</li>
							))}
						</ul>
					</div>
				)}

				<Button className="icon" variant="secondary">
					<FaAngleRight />
				</Button>
			</div>
		</div>
	);
};
//#endregion

//#region Statistics
const StatisticsView = ({ viewStyle }: MainContentProps) => {
	if (viewStyle === "mini") return;

	return <div id="Statistics"></div>;
};
//#endregion
//#endregion
//#endregion

//#region CRUD
interface Intern {
	tags: string[];
	profilePic: string;
	name: string;
	status: "working" | "offline" | "inactive";
	tasks: Task[];
	chats: Chat;
	notice: Notice[];
}

interface Task {
	index: string;
	tags: string[] | null;
	name: string;
	progress: "pending" | "complete";
}

interface Chat {
	storagePath: string;
	logs: Log[];
	unread: number; // How many haven't been read? Needs a thing to calculate this value when needed.
}

interface Log {
	senderId: string;
	status: "unsent" | "sent" | "received" | "read";
	replying?: Log;
	message: string;
	attatchmentPath?: string;
	timeSent: string;
}

interface Notice {
	message: string;
	source: string;
}
//#endregion
//

export default function InternManager() {
	return (
		<div id="InternManager">
			<SideBar />
			<div id="Main">
				<TopBar />
				<Dashboard />
			</div>
		</div>
	);
}

import "./InternManager.css";
import { AiOutlineClose } from "react-icons/ai";

import MediaContainer from "@/Components/Base/MediaContainer";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/Components/Base/Button";

import { 
	BiMessageDots, 
	BiPaperclip, 
	BiSolidCheckSquare, 
	BiPin, 
	BiSolidPin, 
	BiPlus,
	BiSolidPencil,
	BiTrash
} from "react-icons/bi";
//


interface SideBarItemProps {
	id?: string;
	title: string;
	icon?: string;
}
const SideBarItem = ({
	id,
	title,
	icon = "src/assets/icon.png",
}: SideBarItemProps) => {
	const ID = id || useId();

	return (
		<li className="SideBarItem" id={ID}>
			<span>
				<img src={icon} alt={title} />
			</span>
			<p>{title}</p>
		</li>
	);
};
//

interface ListObjectProps {
	title: string;
	children?: React.ReactNode;
	ref?: React.RefObject<HTMLUListElement | null>
}
const ListObject = ({ title = "List", children, ref }: ListObjectProps) => {
	return (
		<div className="ListObject">
			<h4>{title.toUpperCase()}</h4>
			<ul className="uList" ref={ref}>{children}</ul>
		</div>
	);
};
//

interface CardProps {
	title?: string;
	body?: React.ReactNode;
	footer?: React.ReactNode;
	progress?: number;
	options?: React.ReactNode;
}
const Card = ({
	title,
	body,
	footer,
	progress,
	options,
}: CardProps) => {
	if (progress) progress = progress >= 100 ? 100 : progress || 0;
	const completedCheck = progress === 100 ? (
		// <span className="CompletedCheck">✔️</span>
		<BiSolidCheckSquare />
	) : null;

	const [pinned, setPinned] = useState(false);
	const [optionsOpen, setOptionsOpen] = useState(false)

	return (
		<div className={!(title && footer) ? "Card empty" : "Card"}>
			{title && <div className="CardTitleBox">
				<p className="CardTitle">{title}</p>
				{completedCheck}
				{options && <Button
					className="CardOptionsButton"
					variant="ghost"
					icon="⁝"
					onClick={() => setOptionsOpen(!optionsOpen)}
				/>}
				{optionsOpen && options && <ul 
					className="CardOptionsPopUp" 
					ref={el => {
						if (el && optionsOpen && options) {
							const handleClickOutside = (event: MouseEvent) => {
								if (!el.contains(event.target as Node)) {
									setOptionsOpen(false);
								}
							};
							document.addEventListener("mousedown", handleClickOutside);
							return () => {
								document.removeEventListener("mousedown", handleClickOutside);
							};
						}
					}}
				>{options}</ul>}
			</div>}

			<div className="CardBody">{body}</div>

			{footer && <div className="CardFooter">
				{footer}
				<Button
					className="PinnedIcon"
					variant="ghost"
					children={pinned ? <BiSolidPin /> : <BiPin />}
					// icon={pinned ? "📌" : "📍"}
					onClick={() => setPinned(!pinned)}
				/>
			</div>}

			{progress && <div className="Progress">
				<p className="ProgressHeader">Progress:</p>
				<p className="ProgressValue">{progress}%</p>
				<div className="ProgressBar">
					<div
						className="ProgressBarFill"
						style={{ width: `${progress.toString()}%` }}
					/>
				</div>
			</div>}
		</div>
	);
};

type TaskCardProps = Omit<CardProps, "body"> & {
	idx: string;
	body?: React.ReactNode;
	steps?: React.ReactNode;
	gallery?: React.ReactNode;
};
const TaskCard = ({
	idx,
	title,
	progress,

	steps,
	gallery,
}: TaskCardProps) => {
	const body = (
		<>
			{steps}
			{gallery}
		</>
	);
	const footer = (
		<div className="Notifications">
			<div className="MessagesNote">
				<BiMessageDots size={20} />
				<p>3</p>
			</div>
			<div className="ClipNote">
				<BiPaperclip size={20} />
				<p>2</p>
			</div>
		</div>
	);

	const handleDelete = () => {
		DeleteTask(idx);
	}
	const handleEdit = () => {

	}
	const optionsMenu = (
		<>
			<li><Button 
				variant="secondary"
				onClick={handleEdit}
				><span>{<BiSolidPencil/>}</span>Edit</Button></li>
			<hr />
			<li><Button 
				variant="secondary"
				onClick={handleDelete}
			><span>{<BiTrash/>}</span>Delete</Button></li>
		</>
	);

	return (
		<Card 
			title={title} 
			body={body} 
			footer={footer} 
			progress={progress}
			options={optionsMenu}
		/>
	);
};
//

interface AddTaskProps {
	onClick: () => void
}
const AddTask = ({
	onClick
}: AddTaskProps) => {
	const body = (
		<>
			<Button className="AddTaskButton" onClick={onClick}><BiPlus /></Button>
		</>
	);
	return (
		<Card
			body={body}
		/>
	)
}
//

interface StepsListProps {
	children?: React.ReactNode;
}
const StepsList = ({ children }: StepsListProps) => {
	return <ul className="StepsList">{children}</ul>;
};

interface StepInsertProps {
	icon?: string;
	title: string;
	details?: string;
	completed?: boolean;
	color?:
		| "red"
		| "orange"
		| "yellow"
		| "lime"
		| "green"
		| "teal"
		| "cyan"
		| "blue"
		| "indigo"
		| "purple"
		| "violet"
		| "magenta";
}
const StepInsert = ({
	icon,
	title = "This is an example of a step",
	details,
	completed,
	color,
}: StepInsertProps) => {
	const [showDetails, setshowDetails] = useState(false);

	const colorOptions: StepInsertProps["color"][] = [
		"red", "orange", "yellow", "lime", "green", "teal", "cyan", "blue", "indigo", "purple", "violet", "magenta"
	];

	function getRandomColor(): StepInsertProps["color"] {
		const idx = Math.floor(Math.random() * colorOptions.length);
		return colorOptions[idx];
	}
	
	const [stepColor] = useState<StepInsertProps["color"]>(getRandomColor());
	
	const _color: React.CSSProperties = color? 
		{  backgroundColor: `var(--color-muted-${stepColor})` } :
		{ backgroundColor: `var(--color-accent-muted-dim)` };

	const handleShowDetails = () => {
		if (!details) return;
		setshowDetails(!showDetails);
	};

	return (
		<li 
			className="StepInsert" 
			style={_color} 
			onClick={handleShowDetails}
			ref={el => {
				if (el && showDetails && details) {
					const handleClickOutside = (event: MouseEvent) => {
						if (!el.contains(event.target as Node)) {
							setshowDetails(false);
						}
					};
					document.addEventListener("mousedown", handleClickOutside);
					return () => {
						document.removeEventListener("mousedown", handleClickOutside);
					};
				}
			}}
		>
			<div className="StepInsertImg"><p>{title.trim()[0]}</p></div>
			<p className={"StepInsertTitle" + (showDetails ? " hide" : "")}>
				{!showDetails && title}
			</p>
			{details && <p className={"StepInsertDetails" + (showDetails ? "" : " hide")}>
				{showDetails && details}
			</p>}
		</li>
	);
};
//


//#region CRUD Functions
export interface Task {
	index: string,
	dateCreated: string,
	dateCompleted: string | null,
	tags: string[] | null,
	name: string,
	steps: TaskStep[],
	gallery: string[] | null,
	completed: boolean,
	pinnedOrder: number | null,
	notifications?: string[]
	attatchments?: string[]
}

export interface TaskStep {
	icon?: string, 
	name: string,
	instructions?: string,
	completed: boolean,
	color?: "red" | "orange" | "yellow" | "lime" | "green" | "teal" | "cyan" | "blue" | "indigo" | "purple"| "violet" | "magenta"
}


export function LoadTasks(): Task[] {
	try {
		const raw = localStorage.getItem("m_Tasks");
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

export function SaveTasks(tasks: Task[]) {
	localStorage.setItem("m_Tasks", JSON.stringify(tasks));
}

export function CreateTask(
	name: string,
	steps: TaskStep[],
	gallery: string[] = [],
	completed: boolean = false,
	pinnedOrder: number = -1,
	tags: string[] = []
): Task {
	const tasks = LoadTasks();
	const now = new Date().toISOString();
	const newTask: Task = {
		index: "0" + GetAllTasks().length.toString(),
		dateCreated: now,
		dateCompleted: null,
		tags: tags,
		name: name,
		steps: steps,
		gallery: gallery,
		completed: completed,
		pinnedOrder: pinnedOrder
	};
	tasks.push(newTask);
	SaveTasks(tasks);
	return newTask;
}

export function GetAllTasks() {
	return LoadTasks();
}

export function updateTask(id: string, patch: Partial<Task>): Task | null {
	const tasks = LoadTasks();
	const idx = tasks.findIndex((t) => t.index === id);
	if (idx === -1) return null;
	tasks[idx] = { ...tasks[idx], ...patch };
	SaveTasks(tasks);
	return tasks[idx];
}

function DeleteTask(id: string) {
	const task = LoadTasks().filter( (t) => t.index === id );
	SaveTasks(task);
}
//#endregion
//

export default function Dashboard() {
	const name = "Joe Shmoe";
	const dashboardUser = "Dashboard User";
	const email = "joeshmoe@shmoe.com.org";

	const [showSideBar, setShowSideBar] = useState<boolean>(
		localStorage.getItem("showSideBar") === "true"
	);

	const [tasksDrafts, setTasksDrafts] = useState<Task[]>([]);
	// let tasksProgress = [];
	// let tasksComplete = [];

	useEffect(() => {
		localStorage.setItem("showSideBar", showSideBar.toString());
		// setTasksDrafts(GetAllTasks());
	}, [showSideBar, tasksDrafts]);

	const drafts = (
		<>
			{ tasksDrafts.length >= 0 ? tasksDrafts.map((t) => (
				<li><TaskCard
					idx={t.index}
					title= {t.name}
					steps= {
						<StepsList>
							{t.steps.map((s) => (
								<StepInsert
									icon={s.icon}
									title={s.name}
									details={s.instructions}
									completed={false}
								/>
							))}
						</StepsList>
					}
				/></li>
			)) : null}
		</>
	);

	const inProgress = drafts;

	const draftsScrollAreaRef = useRef<HTMLUListElement | null>(null);
	function handleAddDraft() {
		CreateTask( "My Task", [{ name: "yyy", completed: false }] );
		setTasksDrafts(GetAllTasks());
		if (draftsScrollAreaRef.current) draftsScrollAreaRef.current.scrollTop += 500;
	}
	function handleAddProgress() {
		console.log("Progress Added");
	}

	return (
		<div id="Dashboard" className={showSideBar ? "sideBarOpen" : "sideBarClosed"}>
			<div id="SideBarToggle" 
				className="SideBarToggle" 
				style={!showSideBar ? {} : {
					left: `calc(var(--sidebar-width) - 3rem)`,
				}}
			>
				<Button
					className="SideBarToggleButton"
					icon="☰"
					onClick={() => setShowSideBar(!showSideBar)}
				/>
			</div>

			<aside id="SideBar">
				<div id="SideBarTitleContainerBox">
					<MediaContainer.Image
						mediaSource="https://thispersondoesnotexist.com/"
						alt="Avatar"
						width="7rem"
						aspectRatio="1"
						borderRadius="100%"
					/>
					<h1>{name}</h1>
					<p>{email}</p>
				</div>

				<div>
					<ul>
						<SideBarItem title="Home" />
						<SideBarItem title="Files" />
						<SideBarItem title="Messages" />
						<SideBarItem title="Notifications" />
						<SideBarItem title="Tasks" />
					</ul>
				</div>
			</aside>

			<section id="Main">
				<div id="NavBar">
					<div id="FolderLocation">
						<a href="">Page</a>
						<p>&gt;</p>
						<a href="">Folder</a>
						<p>&gt;</p>
						<p>Tasks</p>
					</div>
					<div id="NavOptions">
						<ul>
							<li>Pricing</li>
							<li>About</li>
							<li>Options</li>
							<li>Language</li>
						</ul>
						<Button id="NavBarToggle" icon="⁝" />
					</div>
				</div>
				
				<div id="HeaderSection">
					<h2>{dashboardUser}</h2>
				</div>

				<div id="Board">

					<div id="Tasks">
						<div id="TaskLists">
							<ListObject title="DRAFT" ref={draftsScrollAreaRef}>
								{drafts}
								<AddTask onClick={handleAddDraft} />
							</ListObject>

							<ListObject title="IN PROGRESS">
								{inProgress}
								<AddTask onClick={handleAddProgress} />
							</ListObject>

							<ListObject title="DONE">
							</ListObject>
						</div>
					</div>

					<div id="Statistics"></div>
				</div>
			</section>
		</div>
	);
}

import "./Dashboard.css";


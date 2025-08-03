import MediaContainer from "@/Components/Base/MediaContainer";
import { Button } from "@/Components/Base/Button";

import { useEffect, useState } from "react";

import { AiOutlineClose, AiTwotoneBoxPlot } from "react-icons/ai";
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

//#region Misc
function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const namesDict: { [key: string]: string; } = {
	"Billy": "https://i.pinimg.com/736x/6f/1d/23/6f1d232a671e0ef97844056395aa5136.jpg",
	"Finn Mertens": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOBSKzjVL6mZjKdjsfZODefqXFxjOkTb4rA&s",
	"Jake the Dog": "https://www.clipartmax.com/png/middle/171-1716274_animaljake-the-dog-jake-the-dog-adventure-time.png",
	"Simon Petrikov": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCvWRJzw5D8K_YDJnHuN5r1txt6uxGm3Tpg&s",
	"Cake the Cat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzDJzWK8l3LHyv_a9XCEeoITQ8bEf6MGBoQ&s",
	"Bonnie Bubblegum" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEA8WEBAQEBISFRIPEBAPFRYVFRUWFhYVFRUYHiggGBolGxUWITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OGhAQGi0dICUtLS0rLS0tLS0tLS0tLS0rKy0tLSstLS0tLystLS0tLS0tKy0tLTctKy0tLS0rKzctLf/AABEIANIA8AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEMQAAIBAgEIBgcHAgUEAwAAAAECAAMRBAUGEiExQVFxIjJhgZGxEzNCUnKhwSNic4KSstEUUzRDwuHwB5OioyRjg//EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAuEQACAgECBAUDBAMBAAAAAAAAAQIDEQQxBRIhQRMyUWFxIjOBFDRSoUKx8BX/2gAMAwEAAhEDEQA/APKqHpm3m267W8JKnJtYiynpEarudsxyfVTT27ATqF+AkomNUEHXqPCa1XFonkgVitlOvRJp1Fsw46+8cZEVqpdizayTcywZ4FXNOoNpLA/Ij6yuTNNYeCvKk+giIlAANtcmKL6QB4yHnZk6rtXjrEXZHKyWizqXUxHHXOTE09Fuw6xO2quq+8T4cK9ay00LvuVQWPyi4PqOhvhEbEuGTMwa72NdxRHAfaP4DUPGWPB5jYNLFg9Uj32sPBbTSq5M3V6O2fbHyeWTdTwlVurTY8kYz2rC5NoUtVOiifCig+O2dQl1T7mlcN9Zf0eQZNwFdUqXoVRe1vsan8T6+GqDbScfFTceYnr0+3g9PnuWfDY/yPD8duvxO2ck92q0EcWdFYcGVW85E4zNTA1duHCHjSJpn5avlI8FrYTLhk11jLJ4681z0LKn/TzUTh635Kw8mH8SnZUyHicN66kyj3h0lP5hqleVrcw36e2t5kiOiIkGUREQAREQAREQAREQAmcA5ude6d3pG4yPwY0WsdRtbWLTvm9CWceVELKLa7Nv5SIdCNotLE+HLjba3ETQ+CfgD3xU6+Z5JTIKJI1sFxUqflOV8Kw2a/OJdckTk0TbhlYsoRSzE6goJJPC035NybVxFRaVJbueOoAbyx3Cer5tZtUsEuqz1j1qhHyXgJWMOY26XRzvfovUgsjZnM9nxJKL/aU9L8x9nu1y44LBUqK6FKmtNfui1+Z3zoiOhXGGx6KnT11L6UIiIwcIiIAIiIAIiIAJjUQMCrAMpFiGAIPMTKIBgoec+ZKG9TDdC/sezfgOEoOJwz0mKVFKsNxnvLAHUdYMrOceQKdUWZdXsuOsp4XiZQ7o5mq4fGX1V9GeTRO3KuTXw76DjV7LDYw7JxRJw5RcXhiIiBUREQAREQAtzOm+3eJ9014ic+JPRblPtHqryE1+KZsm/wBIvEQaq+8PGa5oxvV7x5w8RgdZqLxEx9CjkAKGZiAANpJ2CYiWbM3J2kTiGGpSVT4vabu2eMFZk0aWh3WqC/PwTWb2RkwtOwH2j63bb+UHgJKxEk9hCEYRUY9EhERAsIiIAIiIAIiIAIiIAIiIAJjUQMCDsMyiAFVy1kpKqtSqD4W3jgRPNMpYF6FRqb7RrB3EbiJ7NlWjcBuGo8pVM48kjEU9Q+0S5U+a98ROJzddpVYuaO6/s85ifWFtR2jVPkUcAREQAREQAsuK6jcplQ6q8h5THF9RuX1mdDqryEcZTOaMb1e8TfNGM6v5l84AdFNCxCjWWIUcybD5z03A4YUqaU12IoH8nx1ykZq4bTxKE7KYL941L8z8pfpeB6Pg9WK3Z6iIiXOwIiIAIiIAIiIAIiIAIiIAIiIAIiIAY1E0gVO8WlfZbEg7jaWKQ+VKdnv7wv375WREjzfPDJwpVfSKOhV18m3yvz0nOPBemoOPaUaa8xr8rzzYzPJdTzeup8O3psxERKmMQIiBJZcV1G5fWZ0eqvIT5iOq3KfaPVXkI4ymc1Ynq/mXzm2acV1TzHmIEFxzGp+vftRfkT9RLVK9mUlqLn3qp+SqJYY2Ox7DQx5dPBewia8JTruzqtI1NAKS1MqOtpWGixGvo7r7ROtMn4ltmHZe2o1NB32JPyhzIe7oLdmiJINkHEBdLTSo29AGpgcnN9LvA7pxvhay9bD1ByUP81JkcyKx1Fcu5ridGGybiamykaQ96sQvgoJY/LnNmLyPXpaxeunFFCuOPQ9octfZDmQfqK84yccTU2IQai2ieD3Q+DWM2UdKpqpU3qfAh0f1my/OTlF3ZFbs+xJKjkCsyktUWm25ApqD8zavkNXbOetkzEJtolu2myuPA2PyhzIXHU1t4ycsTIUKuz0FX/tP52tMzgsTos/oCgVWYmq6JqAvqC6Rvq4CHMi7ugu5qifFN59kjBERABODK6XVTwNvGd80Y5Lo3K/hIewMgdG+qeX5Vw3oq1Wn7rm3I6x8jPUpRM9sPo1w/wDcQeI1fxETRyeJQzWpejK7ERFnEERM6a3IHGSlkCyYjqtyMUOqvwiMR1W5GMP1V5CNMpsmnF9U8x5ibppxXVPMeYgBf8z/APD/AP6N9JOSBzMP2B/FbyEno2Ox7PSfYh8InM1E6FZ/frEdyKq+YMnJFZspbDofeao/6qjGSsWcyx5m37iJyvjlUkMlQWO0Uajg8igM5XziwStoPi6SONqVKi0nF9l1exEjIvJKRMaVRWAZSGVgCGUggg6wQd4mUkkEREQARE+2gB8nNlK3oa99noan7DOmceWTbD4i/wDZqfsMCVuVJNg5CfYERp3RERABMXW4I4giZRACuyq5+UbpSfgxXxF/pLbXWzMODGV7PRL4Yn3XQ/O31iJGLWRzTI8/iIijzYmVNrG8xm/CICde4S0dyJPCLBX6rfCYw/UXkJg1UMjcdE6pnQ6q8hGGc2TTiuqe7zm6acV1T3eYgQXvMo/YN+Kf2rLAJX8yfUP+Kf2rLAI1bHstH+3h8Fnzf/w1D8MfWSMjc3RbDURwUjwYiSUWct7sSBy/mdgcdUWriaGnUQBdJXdCVGsK2iRcfzJ6JGCrSe5hRpKiqiKFRFCqqiwCgWAA4ATOIkkiIiAGrEYdKg0aiB1vezAML8bGReV83qdai9Kk7YV2HRq4dmRlIN72BFxuI7ZMxIIayV7M/N2tglqCvjquMdyNdUtoqBuUMxIPE33SSy7/AIev20yPHVO+RucLWw9Xt0B4uo+slFq44aRWYiI07oiIgAiIgBB40dN+cg86BfC1uQPzEnsoj7Ru7ykJnEt8NX+Anw1xLM2o+3L4Z5pEREnlxPqm0+RJTwDWTtQECwY6u3jJjCuGRSOFjzEiJIZLOph96/iP9pqnFYEzXQ7ZpxXVb/m+bppxXVP/ADfFCy+5mLbD396ox8LD6SekVmtT0cLR+8C36mJHykrGrY9rpo4pivZFkzba+HXseqPCo0lBITNZ+hVT3axPcyq3npSbizlWLE2vcTF3Ci5IA4kgDxmU0VMJTZg7IGZRYFhpW+EHUD2jXAoKWNpMbLVRjwWojHwBm+aquGpsLNTVhwZFYfOfMNhlp3C30TsUszAdi32Ds2QA3REQAREQASKzlP2B7alIf+xT9JKyHzp9So416fyufpAvX518lfiIjTtiIiACIiAERlQdP8okPllb0K4/+p/KTWVl6SnivkZE5QTSpVRxpt5GKkJtWYv4PKon0z5EHlBERADundks9fu+s4Z3ZL9v8v1m2ewqex3zCqhYaI2sQo5k2EzkxmtgfS11JF0pdM9p9keOvuiF1J09TttjBd2XjCUfRoiD2EVfAWm2Ijj2qWFgkM3a+jXZDsq09XxUze3OzH9MtEorFgVdOvTYOo2XI2r3gle+XTB4payJUQ3Vxcfwe0bItrqcvVwxPPqboiJBlEREAEREAEREAEhs6PV0/wAdf2PJmQuc/q6X4w/Y8BlP3F8kDERGnaEREAEREAOHKydENwNvGRRW4I4giWCtT0lKneJAspBIO0aouRWSPJcXSKO6e67DwM1Sw554H0db0gHRqi/5ht/mV6IZ5W2twm4sRESBR3TBsQ6Hota417JnNNZbnumu1/SUMxj63vknkP4nruauTWw9BQ+uq9nc6tpGpe4ShZg5G9PiPSOL06FmPAv7I+vdPVYupdzucK06SdrXwIiI07AnTkrKBw7m/qKhu1tfo298Dgd47+M5okNZKWVqyOGXdWBAINwRcEawRxvPsp+TcfUw5so06R20r20eJpk7PhOrlLLgcpUq/q3BI2oei681Ovv2RbWDk21SrfU64iIChERABERABIbOf1dP8Zf2vJmROcyfY392rTPiwX/VAZV0mvkrsREadoREQAREQASNypQ9sb9R/mSU+OoIIOwyGsgU/LeThiKTJ7XWU8GGyeZ1aZUlWFmUkEHiJ69XpFCVO7Z2iVPO/IumDiKY6SjpgbwN/MRE0cniGm5lzx3W5SoiIs4h1ip2eUx1k7Nthaaqb7pYszMm+nxVO4ulL7RuHR6o7zaXlOUugVVuyagu56Hmtkv+lw6IR026b/E27uFh3SXiJoSwevhBQiorsIiJJYREQATFqYJB2MuxgSrDkw1iZRAGs9GduHyxiE9paq8Kg0W/Wv1BkhRzkp/5lJ6faAKq+K6/lIKJXlRmnpK5excsLiqdUaVNw63tdTex4HgewzdK9movSxLbi1JfzKpJ+TL4SwCUOZOPLJxPsREConHlij6ShWUbTTJHxL0l+YE7J8gCeCjI4YBhsIB8ZlOjKeE9BU0LWpuS1M7uJTmNw4cjOeMR265qccoRESS4iIgAiIgBy47D6a6usNn8SFI4yySJynh9E6Q2N5ykkVkjzTOfI3oammuqnUOr7rbxIM0jPUsoYRa1NqbbGG3gdxE84xWHak7U26yGx+hiJLB5zX6d1T5o7M5FU8J6Z/00wejQqVt9R9EH7qD+SfCefej7Z65mpQ9HhMMu80gx5v0vrJq6yL8KhzXOXoiWiImk9EImLsALn+eQA3mWLI2belapihe+taG4fi+8fu7B2yk5qO4m++NS67+hA4am9X1SNU7UUlf1dX5zuXIeKP8Ak2+KpTH1l4RQAAAABsAFgOQ3T7EO59jmy4hY9kkUdshYsf5N/hq0/qRNTZIxQNv6Zzyaif8AXL7EjxpFf19vsee0cBiHLKKBBRirab0lAIANtRJ2EHZvnfQzec+tqhR7tEXP62+gk9j0FKp6XYlUqrn3XHRRj2EWUnsWZxsZZRb9XZNb4NOBwdOigp010VFztJJJ1liTrJJ3zfESRIiIgAiIgBpxWGSqpSoodW2g/Ijge2QGJyBVT1TelX3ahCuPzbG77c5ZZqxWIFNdIgkkhVVRdmY7FUcT/vDOOpeFsq+sWUqoSrMr03RlALXRiBpXt0hddx3zX/VU/wC4o5uonoeS8Kaakvb0tRtOpY3F7ABR2KAAONr751FAdoB5gGL8YcuIy7o8y/q6X91P1p/M+/1VP+4n61/memejX3R4CY1KKMLMgIO4qCJPj+wf+i/4nnKsDsN+WufZMZfzdp0/tKaWU7dDosveNdpAVWalrbp097e0vawG0do2S8bUzTVrIT36G+asTT0lK9mrnNoiNNhXJUM+cHbQrjf0G81PmJdMUmi7Dt89cg87Kelhav3dFh3MPpeJkjFrK1OmSfbqUhp7Tk4AUqQGz0SftE8XInsmRqmlh6DcaNM/+IlKN2c/g3mn+DsiJjUDHUvWYhV5nVfu290fOSjFyfY7reOp3ZGpXqCvtFJiEBFwXGpm7tg7b9kt1DKaHrdE+IkHhqApoqLsUADu385nPIS4lc7XNPp6HMtgrHllmVgdYNx2a5lK1TqleqSORtOqllNxts3PVNlfFIPzrBklppLYm4kfTyqp6ykctc6KeNpn2x36pthqqZ7SQl1yW6N1SmrAqwDKwIKkXBB2gjeJEVKL4cbGq0RsIu9RBwYbXXt1njfbJhWB2G/KfZpjLGxVNoi6VRWAZWDKRcMpBBHYRM5liMloSXpsaLk3LU7Wb40PRbna/bNDJXTrUxVHvUSFPMo51dzGPU0xqmmbYnP/AFajrK6fHSqL87WPjPjY+nuLN8FKq58FUycotlHTE5hiKjdTD1WvvdRQA5+kIPgDN1LA1n9a60x7lC7HvqMPJQe2Q5oq5pGuviQpCAF6jC4ppYse07lX7xsJ0YHAMGFWsQ1WxChb6FMHaFvtPFjt3WE68NhkpghFC32nWSTxJOsnnNsVKeRcpZEREWVETA1F94cNomiplCmPav8ACLxc7YQ80kiyi3sjoqIGBUi4III7DKNj8J6Ko1M7AdR4g7JZquVj7K97SsZzsz6NQn7ptqHEfWZXxKpPEeporon36EVQIVmpA6gNJd/RvrXuPyInRIqo5TRf3GufhOpvkb90lZ1NHqPGhnujsUv6cPsRGVR0x2qJXs6Gtha3wgeLASxZWPTX4fqZUM98Ro0FTfUceC6/O0bIVq5ctUn7FUE9YzQP/wAPDfAf3GIi6Nzk8I+5L4JibcH62lzf9jT5ENd+3n8M7tnlZPT5ETxBhEREAE+iIgB9DEbDblqkpk+ox2sTzJM+RNugbyjNqCTiInozEBBMRLLYAIiJUBERABIvKNRhsYjXuJiJl1n2y9fmITCH1n4z/Sb4iebn5mdKOwkflz1R+JZ9iTDzIsis1djfCfKd+EPQT4F8hET03Cf8v+9TTTuyMyr1/wAo+soOfp6dH4G8xPsTozM3EfsS/H+z/9k=",
	"Marcelene" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKujwhFnTaoD4rFvlYcKsEmjxRC5McN5LB1Q&s"
}
const namesArray = Object.keys(namesDict);
const images = [
	namesArray[getRandomInt(0, namesArray.length - 1)],
	namesArray[getRandomInt(0, namesArray.length - 1)],
	namesArray[getRandomInt(0, namesArray.length - 1)],
	namesArray[getRandomInt(0, namesArray.length - 1)]
]

function handleClickOutside(el: any, state: boolean, toCall: () => void) {
	if (el && state) {
		const onClickOutside = (event: MouseEvent) => {
			if (!el.contains(event.target as Node))
				toCall();
		};
		document.addEventListener("mousedown", onClickOutside);
		return () => {
			document.removeEventListener("mousedown", onClickOutside);
		};
	}
}
//#endregion

//#region Components
	//#region Side Bar
	interface SideBarProps { onToggle: () => void }
	const SideBar = ({ onToggle }: SideBarProps) => {
		const userName: string = images[0];
		const profilePic: string = namesDict[userName];
		
		const userJob: string = "Admin";

		const [open, setOpen] = useState<boolean>(window.screen.width > 600);

		return ( <>
			<Button id="SideBarToggle" onClick={ () => { onToggle(); setOpen(!open) } }><BiMenu /></Button>

			<aside id="SideBar" className={open? "" : "close"}>
				<div id="SideBarProfile">
					<MediaContainer.Image className="MainProfilePic" mediaSource={profilePic} />
					<div className="MainProfileText">
						<h3>{userName}</h3>
						<p>{userJob}</p>
					</div>
				</div>

				<div id="SideBarMenu">
					<ul id="MainMenu">
						<MenuItem name="Overview" icon={<FaBox />} href="" />
						<MenuItem name="Inbox" icon={<FaInbox />} href="" />
						<MenuItem name="Placeholder" icon={<FaFoursquare />} href="" />
						<MenuItem name="Placeholder 2" icon={<AiTwotoneBoxPlot />} href="" />
					</ul>

					<hr />

					<ul id="OtherMenu">
						<MenuItem name="Interns" icon={<FaBox />}>
							<ul>
								<MenuItem name="Overview" icon={<FaBox />}/>
								<MenuItem name="Inbox" icon={<FaInbox />}>
									<MenuItem name="Inbox" icon={<FaInbox />}/>
									<MenuItem name="BOOOOOOOOOOOONB" icon={<FaInbox />}/>
								</MenuItem>
								<MenuItem name="Placeholder" icon={<AiTwotoneBoxPlot />}/>
								<MenuItem name="Placeholder" icon={<FaFoursquare />}>
									<MenuItem name="CHEEEEEEEE" icon={<FaInbox />}/>
									<MenuItem name="Momomomom" icon={<FaInbox />}/>
									<MenuItem name="Placeholder" icon={<FaFoursquare />}>
										<MenuItem name="CHEEEEEEEE" icon={<FaInbox />}/>
										<MenuItem name="Momomomom" icon={<FaInbox />}/>
										<MenuItem name="BOOOOOOOOOOOONB" icon={<FaInbox />}/>
									</MenuItem>
									<MenuItem name="BOOOOOOOOOOOONB" icon={<FaInbox />}/>
								</MenuItem>
							</ul>
						</MenuItem>
						<MenuItem name="Bob" icon={<FaInbox />}/>
						<MenuItem name="The Shining" icon={<FaInbox />}/>
					</ul>
				</div>

				<div id="SideBarFooter">
					<Button className="SideBarFooterButton"
						href=""
						target="_self"
					><FaQuestionCircle /></Button>
					<Button className="SideBarFooterButton"
						href=""
						target="_self"
					><FaCog /></Button>
				</div>
			</aside>
		</> );
	};

	interface MenuItemProps {
		name: string;
		icon: React.ReactNode;
		href?: string;
		target?: "_blank" | "_parent" | "_top" | "_self";
		children?: React.ReactNode;
	}
	const MenuItem = ({ name, icon, href, target = "_self", children }: MenuItemProps) => {
		const [isOpen, setIsOpen] = useState(false);
		
		return (
			<li className="MenuItem">
				<div onClick={() => setIsOpen(!isOpen)}>
					{icon} &nbsp;
					<a href={href} target={target}>{name}</a>
				</div>
				{isOpen && children && <div className="MenuFolderChildren">{children}</div>}
			</li>
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
		const [winSmall, setWinSmall] = useState<boolean>(false);
		useEffect(() => {
			window.addEventListener("resize", () => {
				setWinSmall(window.screen.width <= 500);
			})
		}, [winSmall])

		// File System??
		return (
			<div id="PageLocation">
				{!winSmall && <> 
					<a href=""> Folder 1 &nbsp; \ &nbsp; </a>
					<a href=""> Folder 2 &nbsp; \ &nbsp; </a> 
				</> }
				<a href=""> Folder 3 &nbsp; \ &nbsp; </a>
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
				name: images[1],
				profilePic: namesDict[images[1]],
				// profilePic: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
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
				name: images[2],
				profilePic: namesDict[images[2]],
				// profilePic: `https://robohash.org/${Math.random()}`,
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
					{ message: "Task 3 complete", source: "Tasks" },
					{ message: "Task 4 complete", source: "Tasks" },
				],
			};
			const example3: Intern = {
				tags: ["James", "Doe"],
				name: images[3],
				profilePic: namesDict[images[3]],
				// profilePic: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
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

			useEffect(() => {
				setInternList(GetInternList());
				console.log(internList);
			}, [internList]);

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
						{filteredList.length > 0 &&filteredList.map((f) => (
							<li className="FilterItem" key={f}>
								<p onClick={() => onRemoveFilter(f)}>
									{f} &nbsp; <AiOutlineClose />
								</p>
							</li>
						))}
					</ul>

					<Button className="FilterButton"
						variant="secondary"
						onClick={() => {
							if (filteredList.length > 0){ setShowFilters(!showFilters) }
							else { setShowFilters(false) }
						}}
					>
						{showFilters ? (
							<FaAngleLeft />
						) : (
							<>Filters <FaAngleRight /></>
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
			const [miniMode, setMiniMode] = useState<boolean>(false);
			const [closeSearch, setCloseSearch] = useState<boolean>(false);

			useEffect(() => {
				window.addEventListener("resize", () => {
					setMiniMode(window.screen.width <= 500);
				})
			}, [miniMode])
			
			return (
				<form className={"SearchBar " + (miniMode !== closeSearch? "mini" : "")}
					onSubmit={(e) => {
						e.preventDefault();
						if (value.length === 0) return;
						onSearch(value.trim().toLowerCase());
						setValue("");
					}}
					ref={(el) => { handleClickOutside(el, closeSearch, () => setCloseSearch(false)) }}
				>
					{!miniMode !== closeSearch && <input className="SearchBarField"
						placeholder={label}
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>}
					<Button className="SearchBarButton" 
						variant="ghost" 
						type="submit"
						onClick={() => {
							if (miniMode !== closeSearch) {
								setCloseSearch(!closeSearch);
							}
						}}
					><BiSearch /></Button>
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
							ref={(el) => { if (!showFullDetails) handleClickOutside(el, showFullDetails, () => setShowFullDetails(false)) }}
						>
							<div className="InternObjTitleBar">
								<p className="name gridItem">{internRef.name}</p>
								<p className={"status gridItem " + internRef.status}>●{internRef.status}</p>
								
								{!showFullDetails && ( <>
									<p className="progress gridItem">progress: {overallProgress}%</p>
									<Button className="icon gridItem" variant="secondary">
										<BiBell />
										<p>{internRef.notice.length}</p>
									</Button>
									<Button className="icon gridItem" variant="secondary">
										<BiChat />
										<p>{internRef.chats.unread}</p>
									</Button>
								</>)}
							</div>

							{showFullDetails && internRef.tasks.length > 0 && (
								<div className="InternObjTaskList">
									<p className="progress">Task Progress: {overallProgress}%</p>
									<ul className="ContentTaskList">
										{internRef.tasks.slice(0, 5).map((t) => (
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
								<p className="progress">Notice ({internRef.notice.length})</p>
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

let InternList: Intern[] = [];

export function LoadInterns() {
	let list: Intern[] = [];
	InternList = list;
};
export function GetInternList(): Intern[] {
	return InternList;
};
export function AddNewIntern() {
	SaveInternList();
};
export function UpdateIntern() {
	SaveInternList();
};
export function SaveInternList() {

};
export function DeleteIntern() {
	SaveInternList();
};
//#endregion
//

export default function InternManager() {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(window.screen.width > 600);

	return (
		<div id="InternManager" className={sidebarOpen? "" : "sidebarClose"}>
			<SideBar onToggle={() => setSidebarOpen(!sidebarOpen)} />
			<div id="Main">
				<TopBar />
				<Dashboard />
			</div>
		</div>
	);
}

import "./InternManager.css";

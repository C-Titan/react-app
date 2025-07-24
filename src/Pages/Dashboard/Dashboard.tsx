import MediaContainer from "@/Components/Base/MediaContainer";
import "./Dashboard.css";
import { useId, useState } from "react";
import { Button } from "@/Components/Base/Button";
// import Graph from "@/Components/Base/Graph";

interface SideBarItemProps {
    id?: string
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
            <span><img src={icon} alt={title} /></span>
            <p>{title}</p>
        </li>
    );
}


interface ListObjectProps {
    title: string;
    children?: React.ReactNode;
}
const ListObject = ({
    title = "List",
    children
}: ListObjectProps) => {
    return (
        <div className="ListObject">
            <h4>{title.toUpperCase()}</h4>
            <ul>
                {children}
            </ul>
        </div>
    );
}


interface CardProps {
    title: string;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    progression?: React.ReactNode;
}
const Card = ({
    title = "Main Task",
    body,
    footer,
    progression,
}: CardProps) => {
    return (
        <div className="Card">
            <div className="CardTitleBox">
                <p className="CardTitle">{title}</p>
                <Button className="CardMenuButton" icon="⁝" size="icon" />
            </div>
            <div className="CardBody">
                {body}
            </div>
            <div className="CardFooter">
                {footer}
                <div className="Pinned">
                    <input type="checkbox" className="EmptyPinnedIcon"></input>
                    {/* <input type="checkbox" className="FilledPinnedIcon"></input> */}
                </div>
            </div>
            <div className="Progression">
                <p className="ProgressHeader">Progress</p>
                <p className="ProgressValue">{progression}%</p>
                <div className="ProgressBar">Progress Bar</div>
            </div>
        </div>
    );
}

type CardBasicProps = Omit<CardProps, "body"> & {
    body?: React.ReactNode;
    steps?: React.ReactNode;
    gallery?: React.ReactNode;
}
const CardBasic = ({
    title,
    progression,

    steps,
    gallery,
}: CardBasicProps) => {
    const body = (
        <>
            <ul>{steps}</ul>
            {gallery}
        </>
    )
    const footer = (
        <div className="Notifications">
            <div className="MessagesNote">
                <span><img src="MessagesIcon" /></span>
                <p>3</p>
            </div>
            <div className="ClipNote">
                <span><img src="ClipIcon" /></span>
                <p>2</p>
            </div>
        </div>
    )

    return (
        <Card 
            title={title}
            body={body}
            footer={footer}
            progression={progression}
        />
    )
}


interface StepsListProps {
    children?: React.ReactNode
}
const StepsList = ({
    children
}: StepsListProps) => {
    return (<StepsList>{children}</StepsList>);
}

interface StepInsertProps {
    title: string;
    details?: string;
}
const StepInsert = ({
    title = "This is an example of a step",
    details,
}: StepInsertProps) => {
    const [showDetails, setshowDetails] = useState(false);

    return (
        <li className="StepInsert">
            <span><img className="StepInsertImg" src="profilePlaceholer" alt={title.trim()} /></span>
            <p className="StepInsertTitle">{title}</p>
            {/* <Button 
                icon="src/assets/icon.png"
                className="StepInsertCheck Checked" 
                onClick={() => setshowDetails(!showDetails)}
            /> */}
            <Button 
                icon="src/assets/icon.png"
                className="StepInsertCheck UnChecked" 
                onClick={() => setshowDetails(!showDetails)}
            />
            {showDetails && <p className="StepInsertDetails">{details}</p>}
        </li>
    );
}


export default function Dashboard() {
    const name = "Joe Shmoe";
    const dashboardUser = "Dashboard User";
    const email = "joeshmoe@shmoe.com.org";

    const [showSideBar, setShowSideBar] = useState<boolean>(
        (localStorage.getItem("showSideBar") === "true")
    );

    // const handleShowSideBar = () => {
    function handleShowSideBar () {
        setShowSideBar(!showSideBar);
        localStorage.setItem("showSideBar", showSideBar.toString());
    }

    const SideBarToggle = document.getElementById("SideBarToggle");
    const DashB = document.getElementById("Dashboard");
    SideBarToggle?.addEventListener("onclick", () => {
        handleShowSideBar();
        DashB?.classList.toggle("sideBarClosed");
    })

	return (
		<div id="Dashboard">
		{/* <div id="Dashboard" className={showSideBar ? "" : "sideBarClosed"}> */}
            <div id="SideBarToggle" className="MenuToggle">
                <Button icon="☰" size="icon"/>
                {/* <Button icon="☰" size="icon" onClick={handleShowSideBar}/> */}
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
                
                <div><ul>
                    <SideBarItem title="Home"/>
                    <SideBarItem title="Files"/>
                    <SideBarItem title="Messages"/>
                    <SideBarItem title="Notifications"/>
                    <SideBarItem title="Tasks"/>
                </ul></div>
            </aside>

            <section id="Main">
                <div id="MenuBar">
                    <div id="FolderLocation">
                        <p>Page &gt; Tasks</p>
                    </div>
                    <div id="NavBar">
                        <ul>
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Options</li>
                            <li>Language</li>
                        </ul>
                    </div>
                </div>

                <div id="Board">
                    <div>
                        <div id="HeaderSection">
                            <h2>{dashboardUser}</h2>
                        </div>

                        <div id="TaskLists">
                            {/* <ListObject title="DRAFT">
                                <li><CardBasic
                                    title="Main Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Step 1" details="This is an example of a step"/>
                                            <StepInsert title="Step 2" details="This is also an example of a step"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                /></li>
                                <li><CardBasic
                                    title="Secondary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Buy some yogurt."/>
                                        </StepsList>}
                                /></li>
                                <li><CardBasic
                                    title="Tertiary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Yabadabadoo"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                /></li>
                            </ListObject>

                            <ListObject title="IN PROGRESS">
                                <li><CardBasic
                                    title="Main Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Step 1" details="This is an example of a step"/>
                                            <StepInsert title="Step 2" details="This is also an example of a step"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"10"}
                                /></li>
                                <li><CardBasic
                                    title="Secondary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Buy some yogurt."/>
                                        </StepsList>
                                        }
                                    progression={"98"}
                                /></li>
                                <li><CardBasic
                                    title="Tertiary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Yabadabadoo"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"30%"}
                                /></li>
                            </ListObject>
                            
                            <ListObject title="EDITING">
                                <li><CardBasic
                                    title="Main Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Step 1" details="This is an example of a step"/>
                                            <StepInsert title="Step 2" details="This is also an example of a step"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"10"}
                                /></li>
                                <li><CardBasic
                                    title="Secondary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Buy some yogurt."/>
                                        </StepsList>}
                                    progression={"98"}
                                /></li>
                                <li><CardBasic
                                    title="Tertiary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Yabadabadoo"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"30%"}
                                /></li>
                            </ListObject>
                            
                            <ListObject title="DONE">
                                <li><CardBasic
                                    title="Main Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Step 1" details="This is an example of a step"/>
                                            <StepInsert title="Step 2" details="This is also an example of a step"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"10"}
                                /></li>
                                <li><CardBasic
                                    title="Secondary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Buy some yogurt."/>
                                        </StepsList>}
                                    progression={"98"}
                                /></li>
                                <li><CardBasic
                                    title="Tertiary Task"
                                    steps = {
                                        <StepsList>
                                            <StepInsert title="Yabadabadoo"/>
                                        </StepsList>}
                                    gallery = {
                                        <ul className="GalleryObject">
                                            <li><img src="imagePlaceholer"/></li>
                                            <li><img src="imagePlaceholer"/></li>
                                        </ul>}
                                    progression={"30%"}
                                /></li>
                            </ListObject> */}
                        </div>
                    </div>

                    <div id="Statistics">

                    </div>
                </div>

            </section>
		</div>
	);
}

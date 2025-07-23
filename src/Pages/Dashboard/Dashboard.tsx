import MediaContainer from "@/Components/Base/MediaContainer";
import "./Dashboard.css";
import { useId } from "react";
// import Graph from "@/Components/Base/Graph";

interface SideMenuItemProps {
    id?: string
    title: string;
    icon?: string;
}
const SideMenuItem = ({
    id,
    title,
    icon,
}: SideMenuItemProps) => {
    const ID = id || useId();

    return (
        <div id={ID}>
            {icon && <img src={icon} alt={title} /> }
            <p>{title}</p>
        </div>
    );
}


export default function Dashboard() {
    const name = "Joe Shmoe";
    const dashboardUser = "Dashboard User";
    const email = "joeshmoe@shmoe.com.org";
	return (
		<div id="Dashboard">
            <div id="SideMenu">
                <div id="SideMenuTitleContainerBox">
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
                    <li><SideMenuItem title="Home"/> </li>
                    <li><SideMenuItem title="Files"/> </li>
                    <li><SideMenuItem title="Messages"/> </li>
                    <li><SideMenuItem title="Notifications"/> </li>
                    <li><SideMenuItem title="Tasks"/> </li>
                </ul></div>
            </div>

            <section id="Main">
                <div>
                    <h2>{dashboardUser}</h2>
                </div>
            </section>
		</div>
	);
}

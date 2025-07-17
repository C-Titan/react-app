
import "./Header.css";
import { NavMenu } from "@/Components/NavigationMenu";
import { MediaContainer } from "@/Components/MediaContainer";

export default function Header() {
	return (
		<header className="headerClass">
			<nav>
				<MediaContainer.Image 
					alt="Logo"
					mediaSource="src/assets/generic-company-logo.png"
					width="200px"
					aspectRatio="4/1"
				/>

				<NavMenu>
					<NavMenu.Item title="Products"></NavMenu.Item>
					<NavMenu.ItemLink href="" target="_self">Recources</NavMenu.ItemLink>
					<NavMenu.ItemLink href="" target="_self">Pricing</NavMenu.ItemLink>
				</NavMenu>

				<NavMenu>
					<NavMenu.ItemLink href="" target="_self">Sign in</NavMenu.ItemLink>
					<NavMenu.ItemLink href="" target="_self">Get Started</NavMenu.ItemLink>
				</NavMenu>
			</nav>
		</header>
	);
}

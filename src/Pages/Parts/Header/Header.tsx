import "./Header.css";
import { NavBar } from "@/Components/Base/NavigationBar";
import { MediaContainer } from "@/Components/Base/MediaContainer";
import { useEffect } from "react";

export default function Header() {
	let logoPath = "src/assets/company-logo.png";
	useEffect(() => {
		let width = document.documentElement.getAttribute("width");

		if (width === null) return;

		logoPath =
			width <= "650px"
				? "src/assets/company-logo-mini.png"
				: "src/assets/company-logo.png";
	}, []);

	return (
		<header className="headerClass">
			<nav>
				<MediaContainer.Image
					alt="Logo"
					mediaSource={logoPath}
					width="200px"
					aspectRatio="4/1"
				/>

				<NavBar>
					<NavBar.Item title="Products"></NavBar.Item>
					<NavBar.ItemLink href="" target="_self">
						Recources
					</NavBar.ItemLink>
					<NavBar.ItemLink href="" target="_self">
						Pricing
					</NavBar.ItemLink>
				</NavBar>

				<NavBar>
					<NavBar.ItemLink href="" target="_self">
						Sign in
					</NavBar.ItemLink>
					<NavBar.ItemLink href="" target="_self">
						Get Started
					</NavBar.ItemLink>
				</NavBar>
			</nav>
		</header>
	);
}

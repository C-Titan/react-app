import "./Header.css";
import NavBar from "@/Components/Base/NavigationBar";
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

				<NavBar.List>
					<NavBar.Item title="Products"></NavBar.Item>
					<NavBar.Item href="" target="_self">
						Recources
					</NavBar.Item>
					<NavBar.Item href="" target="_self">
						Pricing
					</NavBar.Item>
				</NavBar.List>

				<NavBar.List>
					<NavBar.Item href="" target="_self">
						Sign in
					</NavBar.Item>
					<NavBar.Item href="" target="_self">
						Get Started
					</NavBar.Item>
				</NavBar.List>
			</nav>
		</header>
	);
}

import "./ThemeToggleButton.css";
import { useEffect, useState } from "react";
import { Button } from "@/Components/Base/Button";

export function ThemeToggleButton() {
	const prevTheme = localStorage.getItem("darkMode");
	const [darkTheme, setTheme] = useState(prevTheme === "dark");

	useEffect(() => {
		document.documentElement.setAttribute(
			"data-theme",
			darkTheme ? "dark" : "light"
		);
		localStorage.setItem("darkMode", darkTheme ? "dark" : "light");
	}, [darkTheme]);

	const handleButtonClick = () => {
		setTheme(!darkTheme);
	};

	return (
		<div className="ToggleDiv">
			<Button id="Toggle" size="icon" onClick={handleButtonClick}>
				{darkTheme ? "🌑" : "☀️"}
			</Button>
		</div>
	);
}

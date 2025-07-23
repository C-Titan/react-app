
import "./ThemeToggleButton.css";
import { useEffect, useState } from "react";
import { Button } from "@/Components/Base/Button";

export function ThemeToggleButton() {
	const themeOptions = ["auto", "light", "dark"] as const;

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const storedTheme = localStorage.getItem("theme") ?? "auto";

	const [themeId, setThemeId] = useState(
		themeOptions.indexOf(storedTheme as typeof themeOptions[number])
	);

	const currentTheme = themeOptions[themeId];

	useEffect(() => {
		const actualTheme =
			currentTheme === "auto"
				? prefersDark ? "dark" : "light"
				: currentTheme;
		document.documentElement.setAttribute("data-theme", actualTheme);
		localStorage.setItem("theme", currentTheme);
	}, [currentTheme, prefersDark]);

	const cycleTheme = () => {
		setThemeId((themeId + 1) % themeOptions.length);
	};

	const getIcon = () => {
		switch (currentTheme) {
			case "light": return "☀️";
			case "auto" : return "🌓";
			case "dark" : return "🌑";
		}
	};

	return (
		<div className="ToggleDiv">
			<Button id="Toggle" size="icon" onClick={cycleTheme}>
				<span>{getIcon()}</span>
			</Button>
		</div>
	);
}

import { useEffect, useState } from "react";
import { Button } from "@/Components/Base/Button";

import { BiBrightnessHalf, BiMoon, BiSun } from "react-icons/bi";

export function ThemeToggleButton() {
	// Component to toggle between light, dark, and auto modes
	// and to cycle through different themes.
	const modeOptions = ["light", "dark", "auto"] as const;
	const storedMode = localStorage.getItem("mode") ?? "auto";
	const [modeId, setModeId] = useState(
		modeOptions.indexOf(storedMode as (typeof modeOptions)[number])
	);
	const currentMode = modeOptions[modeId];

	const prefersDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	const cycleMode = () => {
		setModeId((modeId + 1) % (modeOptions.length - 1)); // Exclude "auto" from cycling for testing
	};

	const getIcon = () => {
		switch (currentMode) {
			case "light":
				return <BiSun />;
			case "auto":
				return <BiBrightnessHalf />;
			case "dark":
				return <BiMoon />;
		}
	};

	// Component to cycle through different themes
	// The themes are defined in the CSS and can be applied to the document.
	const themeOptions = [
		"legacy",
		"dirt",
		"marine",
		"purple",
		"hellscape",
		"dragonfruit",
	] as const;
	const storedTheme = localStorage.getItem("theme") ?? "legacy";
	const [themeId, setThemeId] = useState(
		themeOptions.indexOf(storedTheme as (typeof themeOptions)[number])
	);
	const currentTheme = themeOptions[themeId];

	const cycleTheme = () => {
		setThemeId((themeId + 1) % themeOptions.length);
	};

	// Apply the current theme and mode to the document and store them in localStorage
	useEffect(() => {
		const actualMode =
			currentMode === "auto"
				? prefersDark
					? "dark"
					: "light"
				: currentMode;

		document.documentElement.className = currentTheme;
		localStorage.setItem("theme", currentTheme);

		document.documentElement.setAttribute("data-theme", actualMode);
		localStorage.setItem("mode", currentMode);
	}, [currentMode, currentTheme, prefersDark]);

	return (
		<div id="ThemeSwitcher" className="ToggleDiv">
			<Button id="ThemeToggle" onClick={cycleTheme} />
			<Button id="ModeToggle" onClick={cycleMode}>
				{getIcon()}
			</Button>
		</div>
	);
}

import "./ThemeToggleButton.css";



import "./ThemeToggleButton.css";
import { useEffect, useState } from "react";
import { Button } from "@/Components/Button";
import Sun  from '@/assets/svgs/regular/sun.svg';
import Moon from '@/assets/svgs/regular/moon.svg';
// import { ReactComponent as Sun  } from '@/assets/svgs/regular/sun.svg';
// import { ReactComponent as Moon } from '@/assets/svgs/regular/moon.svg';


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

				{/* {darkTheme ? <img src={Sun} id="Icon"/> : <img src={Moon} id="Icon"/>} */}

				{/* { darkTheme ? 
					<Sun  width={"10px"} height={"10px"} fill={"#ffffff"}/> : 
					<Moon width={"10px"} height={"10px"} fill={"#ffffff"}/> } */}
			</Button>
		</div>
	);
}

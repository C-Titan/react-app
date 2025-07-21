import "./BackToTopButton.css";
import { useEffect, useState } from "react";
import { Button } from "@/Components/Base/Button";

export function BackToTopButton() {
	const [visible, setVisible] = useState({ right: "-7rem" });

	const handleButtonClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScroll = () => {
		if (window.scrollY <= 200) {
			setVisible({ right: "-7rem" });
		} else {
			setVisible({ right: "-1%" });
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="BackToTop" style={visible}>
			<Button id="Button" onClick={handleButtonClick}>
				▲
			</Button>
		</div>
	);
}

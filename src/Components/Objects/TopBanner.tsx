import "./TopBanner.css";
import React, { useState, useEffect } from "react";
import { Button } from "@/Components/Base/Button";

interface TopBannerProps {
	children: React.ReactNode;
}
export const TopBanner: React.FC<TopBannerProps> = ({ children }) => {
	// const [show, setShow] = useState(true);
	const [show, setShow] = useState(
		localStorage.getItem("showTopBanner") === "true"
	);

	useEffect(() => {
		localStorage.setItem("showTopBanner", show.toString());
	}, [show]);

	const handleButtonClick = () => setShow(!show);

	return show ? (
		<div id="TopBanner">
			<div>{children}</div>
			<Button id="closeButton" onClick={handleButtonClick}>
				✖
			</Button>
		</div>
	) : (
		<></>
	);
};

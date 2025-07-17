import "./card-style.css";

interface CardProps {
	coverImage?: string; // Optional prop for the cover image
	iconImage?: string; // Optional prop for the icon image
	title?: string; // Optional title prop
	text?: string; // Optional text prop
}

const Card: React.FC<CardProps> = ({
	coverImage = "https://thispersondoesnotexist.com/",
	iconImage = "https://thispersondoesnotexist.com/",
	title = "(Title)",
	text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
	// text = "(Your card description goes here.)"
}) => {
	return (
		<div className="boxStyle">
			<div className="coverContainerStyle">
				{coverImage && (
					<img src={coverImage} alt="Cover" className="coverStyle" />
				)}
			</div>

			<div className="titleContainerStyle">
				<div className="iconContainerStyle">
					{iconImage && (
						<img src={iconImage} alt="Icon" className="iconStyle" />
					)}
				</div>
				<div>
					<h2 className="titleStyle">{title}</h2>
				</div>
			</div>

			<div className="textContainerStyle">
				<p className="textStyle">{text}</p>
			</div>
		</div>
	);
};

export default Card;

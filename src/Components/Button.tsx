import "./button.css";
import React, { useId } from "react";

interface ButtonProps {
	id?: string;

	variant?: "default" | "secondary" | "ghost" | "danger" | "outlined";
	type?: "button" | "submit" | "reset" | undefined;

	href?: string;
	loading?: true;
	disabled?: true;

	width?: string;
	height?: string;
	size?: "content" | "icon" | "mixed";
	padding?: string;
	color?: string;
	style?: React.CSSProperties;

	icon?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	
	ariaLabel?: string;
	ariaDescribedBy?: string;
}

export const Button: React.FC<ButtonProps> = ({
	id,

	variant = "default",
	type = "button",
	href = "",
	loading,
	disabled,

	width,
	height,
	size = "content",
	padding,
	color,
	style,

	icon = "",
	onClick,
	children,
	
	ariaLabel,
	ariaDescribedBy,
}) => {
	if (id === "") {id = useId()}
	const isDisabled = disabled || loading;

	const variantStyle = {
		default:   "Default",
		secondary: "Secondary",
		ghost:     "Ghost",
		danger:    "Danger",
		outlined:  "Outlined",
	};

	const className =
		`button ` +
		`${variantStyle[variant]}` +
		`${isDisabled ? " disabled" : ""}` +
		`${loading && !isDisabled ? " loading" : ""}` +
		`${size === "icon" ? " icon" : size === "mixed" ? " mixed" : ""}`;

	if (style === undefined) {
		style = {
			width: width,
			height: height,
			padding,
			backgroundColor: color,
		};
	}

	const content = (
		<>
			{loading && <span className="spinner" />}
			{icon && <span className="buttonIcon">{icon}</span>}
			{children}
		</>
	);

	if (href) {
		return (
			<a 
				id={id}
				href={href}
				className={className}
				type={type}
				onClick={onClick}
				style={style}
				aria-label = { ariaLabel || id }
				aria-describedby = { ariaDescribedBy || id }
			>
				{content}
			</a>
		);
	}
	return (
		<button
			id={id}
			className={className}
			type={type}
			onClick={onClick}
			disabled={disabled || loading}
			style={style}
			aria-label = {ariaLabel || id}
			aria-describedby = { ariaDescribedBy || id }
		>
			{content}
		</button>
	);
};

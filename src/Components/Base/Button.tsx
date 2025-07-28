import "./Button.css";
import React, { useId } from "react";

interface ButtonProps {
	id?: string;
	className?: string;

	variant?: "default" | "secondary" | "ghost" | "danger";
	type?: "button" | "submit" | "reset" | undefined;

	href?: string;
	loading?: true;
	disabled?: true;

	width? : string;
	height?: string;
	padding?: string;

	icon?: string;
	children?: React.ReactNode;
	onClick?: () => void;
	
	ariaLabel?: string;
	ariaDescribedBy?: string;
}

export const Button: React.FC<ButtonProps> = ({
	id,
	className,

	variant = "default",
	type = "button",
	href = "",
	loading,
	disabled,

	icon = "",
	onClick,
	children,
	
	ariaLabel,
	ariaDescribedBy,
}) => {
	id = id || useId();
	const isDisabled = disabled || loading;

	const variantStyle = {
		default:   "Default",
		secondary: "Secondary",
		ghost:     "Ghost",
		danger:    "Danger",
	};

	const _className =
		`button ${variantStyle[variant]} 
		${isDisabled ? "disabled" : ""} 
		${loading && !isDisabled ? "loading" : ""} 
		${className || ""} `;

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
				className={_className}
				onClick={onClick}
				aria-label={ariaLabel || id}
				aria-describedby={ariaDescribedBy || id}
			>
				{content}
			</a>
		);
	} else {
		return (
			<button
				id={id}
				className={_className}
				type={type}
				onClick={onClick}
				disabled={disabled || loading}
				aria-label={ariaLabel || id}
				aria-describedby={ariaDescribedBy || id}
			>
				{content}
			</button>
		);
	}
};

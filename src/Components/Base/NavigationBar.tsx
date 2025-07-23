import { useId } from "react";
import "./NavigationBar.css";
//

interface ListProps {
	id?: string;
	title?: string;
	type?: "ul" | "ol";
	children?: React.ReactNode;
	ariaLabel?: string;
	ariaDescribedBy?: string;
	style?: React.CSSProperties;
}
const List = ({
	id = undefined,
	type = "ul",
	children,
	ariaLabel,
	ariaDescribedBy,
	style,
}: ListProps) => {
	const className = "NavBarList";
	const ListTag = type === "ol" ? "ol" : "ul";

	return (
		<ListTag
			id={id}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			className={className}
			style={style || {}}
		>
			{children}
		</ListTag>
	);
};
//

interface ItemProps {
	id?: string;
	title?: string;
	className?: string;

	href?: string;
	target?: "_blank" | "_self" | "_parent" | "_top";

	children?: React.ReactNode;

	ariaLabel?: string;
	ariaDescribedBy?: string;

	onClick?: () => void;
}
const Item = ({
	id,
	title = "",
	className = "",

	href,
	target,

	children,

	ariaLabel = title,

	onClick,
}: ItemProps) => {
	const ID = id ||  useId();
	const content = href ? (
		<a
			id={`${ID}-link`}
			href={href}
			target={target}
			role="button"
			className={`${className ?? ""} MenuListItem`}
			onClick={onClick}
			aria-label={`${ariaLabel}-link`}
		>
			{title && <div>{title}</div>}
			{children}
		</a>
	) : (
		<button
			id={`${ID}-button`}
			className={`${className ?? ""} MenuListItem`}
			onClick={onClick}
			aria-label={`${ariaLabel}-button`}
		>
			{title && <div>{title}</div>}
			{children}
		</button>
	);

	return (
		<li id={ID} aria-label={ariaLabel}>
			{content}
		</li>
	);
};


type CompoundNavBar = {
	List: React.FC<ListProps>;
	Item: React.FC<ItemProps>;
};

const NavBar = {} as CompoundNavBar;
NavBar.List = List;
NavBar.Item = Item;

export default NavBar as CompoundNavBar;

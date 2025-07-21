// import React, { useState } from "react";
import "./NavigationBar.css";
//

interface NavBarProps {
	id?: string;
	ariaLabel?: string;
	ariaDescribedBy?: string;
	children?: React.ReactNode;
}
export const NavBar = ({
	id = undefined,
	ariaLabel,
	ariaDescribedBy,
	children,
}: NavBarProps) => {
	return (
		<List id={id} aria-label={ariaLabel} aria-describedby={ariaDescribedBy}>
			{children}
		</List>
	);
};
//

interface ListProps {
	id?: string;
	title?: string;
	type?: "ul" | "ol";
	children?: React.ReactNode;
	ariaLabel?: string;
	ariaDescribedBy?: string;
}
const List = ({
	id = undefined,
	type = "ul",
	children,
	ariaLabel,
	ariaDescribedBy,
}: ListProps) => {
	const className = "NavBarList";
	const ListTag = type === "ol" ? "ol" : "ul";

	return (
		<ListTag
			id={id}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			className={className}
		>
			{children}
		</ListTag>
	);
};
//

interface ItemProps {
	id?: string;
	title?: string;
	children?: React.ReactNode;
	ariaLabel?: string;
	ariaDescribedBy?: string;
	onClick?: () => void;
}
const Item = ({
	id = undefined,
	title = "",
	children,
	ariaLabel = title,
	ariaDescribedBy = title,
}: ItemProps) => {
	return (
		<li id={id} aria-label={ariaLabel} aria-describedby={ariaDescribedBy}>
			<button
				id={`${id}-button`}
				className="MenuListItem"
				aria-label={`${ariaLabel}-button`}
				aria-describedby={`${ariaDescribedBy}-button`}
			>
				{title && <div>{title}</div>}
				{children}
			</button>
		</li>
	);
};

type ItemLinkProps = Omit<ItemProps, "onnClick"> & {
	href: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
};
const ItemLink = ({
	id = undefined,
	title,
	href = "",
	target = "_blank",
	children,
	ariaLabel = title,
	ariaDescribedBy = title,
}: ItemLinkProps) => {
	return (
		<li id={id} aria-label={ariaLabel} aria-describedby={ariaDescribedBy}>
			<a
				id={`${id}-link`}
				href={href}
				target={target}
				className="MenuListItem"
				aria-label={`${ariaLabel}-link`}
				aria-describedby={`${ariaDescribedBy}-link`}
			>
				{title && <div>{title}</div>}
				{children}
			</a>
		</li>
	);
};

NavBar.List = List;
NavBar.Item = Item;
NavBar.ItemLink = ItemLink;

type CompoundNavBar = React.FC<NavBarProps> & {
	List: React.FC<ListProps>;
	Item: React.FC<ItemProps>;
	ItemLink: React.FC<ItemLinkProps>;
};

export default NavBar as CompoundNavBar;

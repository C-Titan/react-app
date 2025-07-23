
import React from "react";
import "./Accordion.css";
import { useId, useState } from "react";


interface AccordionListProps {
	id?: string;
    className?: string;

	children?: React.ReactNode;

    mode?: "checklist" | "radio";
    onHoverToggle?: true;

	ariaLabel?: string;
	ariaDescribedBy?: string;
};

const List = ({
	id,
	className = "",
	children,

	mode = "radio",
	
    ariaLabel,
	ariaDescribedBy,
}: AccordionListProps) => {
	const ID = id || useId();

	// For checklist mode (multi-open)
	const [openIndexes, setOpenIndexes] = useState<number[]>([]);
	// For radio mode (single open)
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleElement = (index: number) => {
        switch (mode) {
            case "radio":
                setOpenIndex(prev => (prev === index ? null : index));
                break;
            case "checklist":
                setOpenIndexes(prev => {
                    if (prev.includes(index)) {
                        return prev.filter(i => i !== index);
                    } else {
                        return [...prev, index];
                    }
                });
                break;
        }
	};

	const childrenWithProps = React.Children.map(children, (child, index) => {
		if (!React.isValidElement(child)) return child;

		const isOpen = mode === "radio"
			? index === openIndex
			: openIndexes.includes(index);

		return React.cloneElement(child, {
			isOpen,
			onToggle: () => toggleElement(index),
		});
	});

	return (
		<ul 
			id={ID}
			className={`${className} AccordionList`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
		>
			{childrenWithProps}
		</ul>
	);
};


interface AccordionElementProps {
	id?: string;
	title: string;
	className?: string;

	children?: React.ReactNode;

	ariaLabel?: string;
	ariaDescribedBy?: string;

	isOpen?: boolean;
	onToggle?: () => void;
};

const Element = ({
	id,
	title,
	className = "",

	children,
	
    ariaLabel,
	ariaDescribedBy,
	
    isOpen = false,
	onToggle = () => {},
}: AccordionElementProps) => {
	const ID = id || useId();

	return (
		<li 
			id={ID}
			className={`${className} AccordionElement`}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
		>
			<button
				className="AccordionButton"
				onClick={onToggle}
			>
				{title}
				<span className="arrow">{isOpen ? " ▴" : " ▾"}</span>
			</button>

			{isOpen && (
				<div className="AccordionContent">
					{children}
				</div>
			)}
		</li>
	);
};


type CompoundAccordion = {
	Element: React.FC<AccordionElementProps>;
	List: React.FC<AccordionListProps>;
};

const Accordion = {} as CompoundAccordion;
Accordion.Element = Element;
Accordion.List = List;

export default Accordion as CompoundAccordion;


import './Dropdown.css';
import React, { useState } from 'react';

const Dropdown = () => {

}

interface TriggerProps {
	title: string;
	target?: string;
	children?: React.ReactNode;
	ariaLabel?: string;
	ariaDescribedBy?: string;
}
const Trigger = ({
	title = "",
	children,
	ariaLabel = title,
	ariaDescribedBy = title,
}: TriggerProps) => {
	const [dropContent, setDropContent] = useState(false);
	const toggleDropdown = () => {
        setDropContent(prev => !prev);
    };

	return (
		<>
			<div 
				className="Trigger"
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				onClick={toggleDropdown}
				onBlur={() => setDropContent(false)}
			>{title}</div>
			{
				(dropContent) &&
				<div 
					className="Content" 
					onMouseLeave={() => setDropContent(false)}
				>{children}</div>
			}
		</>
	);
};




Dropdown.Trigger = Trigger;

type CompoundDropDown = {
    Trigger : React.FC<TriggerProps>;
};

export default Dropdown as CompoundDropDown;

import React, { useId, useState } from "react";
import "./inputField.css";

//#region Base
export interface FieldProps {
	id?: string;
	label?: string;

	placeholder?: string;
	type?: "password" | "email" | any;
	value: string;
	onChange: (value: string) => void;
	
	autoComplete?: string;
	required?: boolean;
	useToggle?: boolean;
	restrictNumeric?: boolean;
	inputMode?: "none" | "text" | "numeric" | "decimal" | "email" | "tel" | "url";

	// typeCheck?: "email" | "url" | "phone" | "none" | "custom";
	// typeCheckCustom?: string;
	
	ariaLabel?: string;
	ariaDescribedBy?: string;

	hint?: string;
	error?: string;
}

const Field: React.FC<FieldProps> = ({
	id,
	label = '',
	
	placeholder = '',
	type = 'text',
	value = "",
	onChange,
	
	autoComplete,
	required = true,
	useToggle = false,
	restrictNumeric = false,
	// typeCheck = "none",
	// typeCheckCustom = ``,
	inputMode = "text",
	
	ariaLabel,
	ariaDescribedBy,

	hint,
	error
}) => {
	const inputId = useId();
	const [show, setShow] = useState(false);
	const inputType = useToggle ? (show ? 'text' : type) : type;

	// const typeCheckRef: { [key: string] : RegExp } = {
	// 	"email": /^[^\s]+@[^\s]+\.[^\s]+$/,
	// 	"url": /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i,
	// 	"phone": /^\d{3}-\d{3}-\d{4}$/,
	// 	"none": /.^/,
	// 	"custom" : new RegExp(typeCheckCustom)
	// };
	// const inputTypeCheck: RegExp = typeCheckRef[typeCheck];

	return (
		<div>
			{label && <label htmlFor = {id || inputId}>{label}</label>}
			
			<div className = "Wrapper">
				<input
					id = {id || inputId}
					
					type = {inputType}
					value = {value}
					placeholder = {placeholder}
					onChange = {(e) => {
						const val = e.target.value;
						if (restrictNumeric && /\D/.test(val)) return;
						// if (inputTypeCheck.test(val)) return;
						onChange(val);
					}}
					
					required = {required}
					className = "Field"
					
					autoComplete = {autoComplete}
					inputMode = {restrictNumeric ? 'numeric' : inputMode}
					pattern = {restrictNumeric ? '[0-9]*' : undefined}
					
					aria-label = {ariaLabel || label}
					aria-describedby = {
						error ? `${inputId}-error` :
						hint ? `${inputId}-hint` :
						ariaDescribedBy || label
					}

				/>

				{useToggle && (
					<button
						id = "togglePassword"
						type = "button"
						onClick = {() => setShow(prev => !prev)}
					>
						{show ? '👁️' : '🙈'}
					</button>
				)}
			</div>
			
			{error ? (
					<p className="message error" role="alert" id={`${inputId}-error`}>
						{error}
					</p>
				) : 
			hint ? (
					<p className="message hint" id={`${inputId}-hint`}>
						{hint}
					</p>
				) : 
			(<></>)
			}
		</div>
  	);
};
//#endregion


//#region Input Fields

//#region PasswordField
type PasswordFieldProps = Omit<FieldProps, 'restrictNumeric'>
export const PasswordField: React.FC<PasswordFieldProps> = ({
	value = "",
	onChange,
	...props
}) => (
	<Field
		value={value}
		onChange={onChange}
		type = "password"
		placeholder = "••••••••"
		useToggle = {true}		
		{...props}
	/>
);
//#endregion

//#region EmailField
type EmailFieldProps = Omit<FieldProps, 'useToggle' | 'restrictNumeric'>
export const EmailField: React.FC<EmailFieldProps> = ({
	value = "",
	onChange,
	...props
}) => (
	<Field
		value={value}
		onChange={onChange}
		type = "email" 
		placeholder = "example@gmail.com"
		autoComplete = "email" 
		// typeCheck = "email"
		{...props}
	/>
);
//#endregion

//#region PinField
type PinFieldProps = Omit<FieldProps, 'inputMode'>
// type PinFieldProps = Omit<FieldProps, 'restrictNumeric'>
export const PinField: React.FC<PinFieldProps> = ({
	value = "",
	onChange,
	...props
}) => (
	<Field
		value={value}
		onChange={onChange}
		type = "password"
		placeholder = "****"
		restrictNumeric = {true}
		inputMode = "numeric"
		useToggle = {true}
		// typeCheck = "phone"
		{...props}
	/>
);
//#endregion

//#region Text Field
type TextFieldProps = Omit<FieldProps, 'useToggle' | 'restrictNumeric' | 'required' | 'type'>
export const TextField: React.FC<TextFieldProps> = ({
	value = "",
	onChange,
	...props
}) => (
	<Field
		value={value}
		onChange={onChange}
		type = "text"
		placeholder = "Your text here..."
		required = {false}
		{...props}
	/>
);
//#endregion

//#region TelField
type TelFieldProps = Omit<FieldProps, 'restrictNumeric' | 'inputMode' | 'type'>
export const TelField: React.FC<TelFieldProps> = ({
	value = "",
	onChange,
	...props
}) => (
	<Field
		value={value}
		onChange={onChange}
		type = "text"
		placeholder = "000-000-000"
		restrictNumeric = {true}
		inputMode = "tel"
		// typeCheck = "phone"
		{...props}
	/>
);
//#endregion

//#region Field
//#endregion

//#endregion

/*
Regular Expression Cheat Sheet

Basic Syntax:
- .       : Matches any single character except newline
- ^       : Asserts the start of a string
- $       : Asserts the end of a string
- *       : Matches 0 or more occurrences of the preceding element
- +       : Matches 1 or more occurrences of the preceding element
- ?       : Matches 0 or 1 occurrence of the preceding element (optional)
- |       : Acts as a logical OR between expressions
/^[^\s@]+@[^\s@]+\.[^\s@]+$/,

Character Classes:
- [abc]   : Matches 'a', 'b', or 'c'
- [a-z]   : Matches any lowercase letter
- [A-Z]   : Matches any uppercase letter
- [0-9]   : Matches any digit
- [^abc]  : Matches any character except 'a', 'b', or 'c'

Predefined Character Classes:
- \d      : Matches any digit (equivalent to [0-9])
- \D      : Matches any non-digit character
- \w      : Matches any word character (alphanumeric + underscore)
- \W      : Matches any non-word character
- \s      : Matches any whitespace character (spaces, tabs, line breaks)
- \S      : Matches any non-whitespace character

Quantifiers:
- {n}     : Exactly n occurrences
- {n,}    : At least n occurrences
- {n,m}   : Between n and m occurrences

Grouping:
- (abc)   : Matches "abc" and captures it for back-referencing

Escaping Special Characters:
- Use \ to escape metacharacters (e.g., \. to match a literal period)

Example Patterns:
- Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
- Phone: /^\d{3}-\d{3}-\d{4}$/
- URL: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i
- Date (YYYY-MM-DD): /^\d{4}-\d{2}-\d{2}$/

Flags:
- i       : Case-insensitive matching
- g       : Global search (find all matches)
- m       : Multiline matching (changes behavior of ^ and $)

*/

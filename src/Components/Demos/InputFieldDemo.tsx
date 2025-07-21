import { useState } from "react";
import {
	EmailField,
	PasswordField,
	PinField,
	TextField,
	TelField,
} from "@/Components/Base/InputField";
import { Button } from "@/Components/Base/Button";

export default function InputFieldDemo() {
	const [pin, setPin] = useState("");
	const [tel, setTel] = useState("");
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} style={{ margin: "5%" }}>
			<PinField label="Pin" value={pin} onChange={setPin} />
			<br />
			<TelField label="Tel" value={tel} onChange={setTel} />
			<br />
			<TextField label="Text" value={text} onChange={setText} />
			<br />
			<EmailField label="Email" value={email} onChange={setEmail} />
			<br />
			<PasswordField
				label="Password"
				value={password}
				onChange={setPassword}
			/>
			<br />
			<Button type="submit">Submit</Button>
		</form>
	);
}

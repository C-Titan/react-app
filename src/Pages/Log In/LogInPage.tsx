import "./LogInPage.css";
import React, { useState } from "react";
import { EmailField, PasswordField } from "@/Components/Base/InputField";
import { Button } from "@/Components/Base/Button";

interface LoginProps {
	onLogin?: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// console.log("Login submitted:", { email, password });

		if (onLogin) onLogin(email, password);
	};

	return (
		<div className="LoginPage">
			<div className="Card">
				<h2 className="HeaderText">Login</h2>
				<form onSubmit={handleSubmit} className="Form">
					<EmailField
						label="Email"
						value={email}
						onChange={setEmail}
					/>

					<PasswordField
						label="Password"
						value={password}
						onChange={setPassword}
					/>

					<a href="">Forgot Password</a>

					<br />

					<Button type="submit" variant="default">
						Log In
					</Button>

					<Button type="submit" variant="ghost">
						Sign up
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;

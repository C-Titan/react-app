import "./SignUpPage.css";
import React, { useState } from "react";
import { EmailField, PasswordField } from "@/Components/Base/InputField";
import { Button } from "@/Components/Base/Button";

interface SignUpProps {
	onSignup?: (email: string, password: string) => void; // Made required
}

const SignUp: React.FC<SignUpProps> = ({ onSignup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (confirm !== password) {
			setError("Passwords must match.");
			return;
		}

		function isPasswordSecure(pass: string): {
			bool: boolean;
			message: string;
		} {
			const isLengthValid = pass.length >= 8;
			const isspacialValid = /[!@$%^&*(){}\[\]\/]/.test(pass);
			const isNumeralValid = /[0-9]/.test(pass);
			return {
				bool: isLengthValid && (isNumeralValid || isspacialValid),
				message: !isLengthValid
					? "Password must be at least 8 characters long"
					: !isNumeralValid || !isspacialValid
					? "Password must contain a number or a special character"
					: "",
			};
		}
		const doPasswordsMatch = (p1: string, p2: string) => p1 === p2;

		if (!doPasswordsMatch(password, confirm)) {
			setError("Passwords must match");
			return;
		}

		const passwordCheck = isPasswordSecure(password);
		if (!passwordCheck.bool) {
			setError(passwordCheck.message);
			return;
		}

		if (onSignup) onSignup(email, password);
	};

	return (
		<div className="SignUpPage">
			<div className="Card">
				<h2 className="HeaderText">Sign up with us</h2>
				<p className="HeaderSubtext">
					Start your management journey here.
				</p>
				<form onSubmit={handleSubmit} className="Form">
					<EmailField
						label="email"
						value={email}
						onChange={setEmail}
					/>

					<PasswordField
						label="password"
						value={password}
						onChange={setPassword}
					/>

					<PasswordField
						label="Confirm Pssword"
						value={confirm}
						onChange={setConfirm}
					/>

					{error && <div className="errorMessage">{error}</div>}

					<Button type="submit" variant="default">
						Create Account
					</Button>

					<Button type="button" variant="ghost" href="#">
						Back to Login
					</Button>
				</form>

				{/* <div id="signup-with">
					<h3>Sign up with</h3>
					<div id="signup-options"></div>
				</div> */}
			</div>
		</div>
	);
};

export default SignUp;

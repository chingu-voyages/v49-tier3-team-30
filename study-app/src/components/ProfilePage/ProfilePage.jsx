import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage() {
	<Navbar />;
	return (
		<div className="profileContainer">
			{" "}
			<h2 className="profileHeader">Create Account</h2>
			<form action="" className="profileForm" autoComplete="off">
				<div className="inputRow">
					{" "}
					<input
						type="text"
						className="profileInput"
						id="firstName"
						placeholder="First Name"
					/>
					<input
						type="text"
						className="profileInput"
						id="lastName"
						placeholder="Last Name"
					/>
				</div>
				<div className="inputRow">
					{" "}
					<input
						type="text"
						className="profileInput"
						id="email"
						placeholder="E-Mail"
					/>
					<input
						type="text"
						className="profileInput"
						id="username"
						placeholder="Username"
					/>
				</div>
				<div className="inputRow">
					{" "}
					<input
						type="text"
						className="profileInput"
						id="password"
						placeholder="Password"
					/>
					<input
						type="text"
						className="profileInput"
						id="confirmPassword"
						placeholder="Confirm Password"
					/>
				</div>
				<Link to="forgot-password">Forgot Password</Link>
				<button className="createButton">Create Account</button>
			</form>
		</div>
	);
}

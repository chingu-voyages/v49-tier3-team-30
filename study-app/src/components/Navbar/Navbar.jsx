import React from "react";
import { Link } from "react-router-dom";
import "./Navbar";

function Navbar() {
	return (
		<div className="navbarSection">
			<Link to="" className="navLink">
				Home
			</Link>
			<Link to="profile" className="navLink">
				Profile
			</Link>
			<Link to="login" className="navLink" id="loginLink">
				Login
			</Link>
		</div>
	);
}

export default Navbar;

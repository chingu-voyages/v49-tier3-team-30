import React, { useState } from "react";
import "../Main/Main.css";

export default function RightSideMenu({ mode }) {
	return (
		<div className="rightSideMenu">
			<p>{mode}</p>
		</div>
	);
}

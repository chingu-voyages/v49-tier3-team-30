import React, { useState } from "react";

export default function RightSideMenu({ mode }) {
	return (
		<div className="rightSideMenu">
			<p>{mode}</p>
		</div>
	);
}

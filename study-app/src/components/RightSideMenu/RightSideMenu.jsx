import React, { useState } from "react";
import "../Main/Main.css";
import "./RightSideMenu.css";
import { nodesData } from "../../tempdb";

export default function RightSideMenu({ selectedNode, setSelectedNode }) {
	function manageClose() {
		setSelectedNode("");
	}

	if (selectedNode) {
		let nodeData = nodesData.frontend_nodes.find(
			(item) => item.name == selectedNode
		);
		return (
			<div className="rightSideMenu">
				<p>{nodeData.name}</p>
				<p>{nodeData.desc}</p>
				<p>{nodeData.link}</p>
				<button onClick={manageClose}>Close</button>
			</div>
		);
	}
}

import React, { useState } from "react";
import FrontEndRoadmap from "../FrontEndRoadmap/FrontEndRoadmap";
import BackEndRoadmap from "../BackEndRoadmap/BackEndRoadmap";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import Welcome from "../Welcome/Welcome";
import RightSideMenu from "../RightSideMenu/RightSideMenu";

function Main() {
	const [mode, setMode] = useState("");
	const [selectedNode, setSelectedNode] = useState("");

	const modes = {
		"Front End": <FrontEndRoadmap setSelectedNode={setSelectedNode} />,
		"Back End": <BackEndRoadmap setSelectedNode={setSelectedNode} />,
	};

	return (
		<div className="mainContainer">
			<LeftSideMenu mode={mode} setMode={setMode} />

			{modes[mode] || <Welcome />}

			<RightSideMenu
				selectedNode={selectedNode}
				setSelectedNode={setSelectedNode}
			/>

			{/* {mode === 'Front End' && <FrontEndRoadmap/>}
      {!mode && <Welcome/>} */}
		</div>
	);
}

export default Main;

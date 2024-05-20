import React, { useState } from "react";
import FrontEndRoadmap from "../FrontEndRoadmap/FrontEndRoadmap";
import BackEndRoadmap from "../BackEndRoadmap/BackEndRoadmap";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import Welcome from "../Welcome/Welcome";
import RightSideMenu from "../RightSideMenu/RightSideMenu";

function Main() {
	const [mode, setMode] = useState("");

	const modes = {
		"Front End": <FrontEndRoadmap />,
		"Back End": <BackEndRoadmap />,
	};

	return (
		<div className="mainContainer">
			<LeftSideMenu mode={mode} setMode={setMode} />

			{modes[mode] || <Welcome />}

			<RightSideMenu mode={mode} />

			{/* {mode === 'Front End' && <FrontEndRoadmap/>}
      {!mode && <Welcome/>} */}
		</div>
	);
}

export default Main;

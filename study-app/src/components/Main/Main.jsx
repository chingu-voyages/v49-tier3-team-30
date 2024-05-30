import { useState, useEffect } from "react";
//import FrontEndRoadmap from "../FrontEndRoadmap/FrontEndRoadmap";
//import BackEndRoadmap from "../BackEndRoadmap/BackEndRoadmap";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import Welcome from "../Welcome/Welcome";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
import axios from "axios";
import RoadMap from "../RoadMap/RoadMap";


function Main() {

	const [courses, setCourses] = useState([]);
	const [mode, setMode] = useState("");
	const [nodes, setNodes] = useState([]);
	const [edges, setEdges] = useState([]);

	const [selectedNode, setSelectedNode] = useState("");

	const allCourses = async() => {
		try{
			const response = await axios.get("http://localhost:3004/course")
			console.log(response.data);
			setCourses(response.data)
		} catch(err) {
			console.log(err)
		}
	}
	
	useEffect(() => {
		allCourses()
	}, []);



	// const modes = {
	// 	"Front End": <FrontEndRoadmap setSelectedNode={setSelectedNode} />,
	// 	"Back End": <BackEndRoadmap setSelectedNode={setSelectedNode} />,
	// };

	return (
		<div className="mainContainer">
			<LeftSideMenu mode={mode} setMode={setMode} courses={courses} setNodes={setNodes} setEdges={setEdges}/>

			{/* {modes[mode] || <Welcome />} */}

			{(nodes.length > 0 && edges.length > 0) ? <RoadMap nodes={nodes} edges={edges}/> : <Welcome />}

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

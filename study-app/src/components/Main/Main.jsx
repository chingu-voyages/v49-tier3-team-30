import { useState, useEffect } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import Welcome from "../Welcome/Welcome";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
import axios from "axios";
import RoadMap from "../RoadMap/RoadMap";
const SERVER = import.meta.env.VITE_SERVER_URL


function Main() {
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [lessonData, setLessonData] = useState([]);

  const [selectedNode, setSelectedNode] = useState("");

  const allCourses = async () => {
    try {
      const response = await axios.get(`${SERVER}/course`);

      setCourses(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLessonDetails = async (e) => {
    try {
      const id = e.target.id;
      if (!id) return;
      const lessonDetails = await axios.get(
        `${SERVER}/lesson/${id}`
      );
      setLessonData(lessonDetails.data);
      alert(`${lessonDetails.data[0].name} clicked`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allCourses();
  }, []);

  return (
    <div className="mainContainer">
      <LeftSideMenu
        mode={mode}
        setMode={setMode}
        courses={courses}
        setNodes={setNodes}
        setEdges={setEdges}
        setCourseName={setCourseName}
      />

      {mode !== "" ? (
        <RoadMap
          nodes={nodes}
          edges={edges}
          courseName={courseName}
          getLessonDetails={getLessonDetails}
        />
      ) : (
        <Welcome />
      )}

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

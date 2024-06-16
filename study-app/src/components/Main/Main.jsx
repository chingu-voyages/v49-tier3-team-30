import { useState, useEffect } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import Welcome from "../Welcome/Welcome";

import axios from "axios";
import RoadMap from "../RoadMap/RoadMap";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Main({ authState, setAuthState }) {
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [courseName, setCourseName] = useState("");

  const allCourses = async () => {
    try {
      const response = await axios.get(`${serverUrl}/course`);

      setCourses(response.data);
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
          authState={authState}
          setAuthState={setAuthState}
        />
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default Main;

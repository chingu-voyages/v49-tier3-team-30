import { useState } from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
const serverUrl = import.meta.env.VITE_SERVER_URL;



function RoadMap({ nodes, edges, courseName }) {

  const [lessonData, setLessonData] = useState(null);


  const getLessonDetails = async (e) => {
    try {
      const id = e.target.id;
      if (!id) return;
      const lessonDetails = await axios.get(`${serverUrl}/lesson/${id}`);
      console.log("lessonDetails.data", lessonDetails.data)
      setLessonData(lessonDetails.data[0]);
      console.log("setLessonData", lessonData)
    } catch (err) {
      console.log(err);
    }
  };



  const CustomNode = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    //console.log("dataaaaaa", data); //here I can find the id of lessons data?._id
    return (
      <div
        id={data?._id}
        style={{
          width: "100px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 10,
          border: "1px solid #222",
          borderRadius: 1,
          backgroundColor: hovered ? "#00529D" : "#607262",
          fontSize: "12px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={getLessonDetails}
      >
        {data.label}
        <Handle
          type="target"
          position={data.targetPosition}
          style={{ background: "black" }}
        />
        <Handle
          type="source"
          position={data.sourcePosition}
          style={{ visibility: "none", overflow: "visible" }}
        />
      </div>
    );
  };

  const nodeTypes = {
    customNode: CustomNode,
  };

  //we cannot use onNodeClick  because React Flow wraps each Custom node with additional div. This additional div does not have lesson id but due to event bubbling sometimes our Custom node div handles a click and causes getLessonDetail logic to work, and sometimes a click event is handled  by React Flow node wrap and getLessonDetail logic does not work. That is why getLessonDetails functios is hadles afte click event from React Flow div.

  return (
    <div className="roadmapContainer">
      <div className="roadmapTitle">
        <h1>{courseName}</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        // onNodeClick={getLessonDetails}
        fitView
        zoomOnScroll={false}
        panOnDrag={false}
      />
      {lessonData && <RightSideMenu lessonData={lessonData} setLessonData={setLessonData} />}
    </div>
  );
}

export default RoadMap;

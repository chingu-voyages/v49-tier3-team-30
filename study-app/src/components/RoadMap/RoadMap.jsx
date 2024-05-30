import { useState } from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";

function RoadMap({ nodes, edges }) {
  const onNodeClick = (e) => {
    console.log(e.target.innerText); //prints label name
  };

  const CustomNode = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    //console.log("dataaaaaa", data) //here I can find the id of lessons
    return (
      <div
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
      >
        <Handle
          type="target"
          position={data.targetPosition}
          style={{ background: "black" }}
        />
        <div>{data.label}</div>
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

  return (
    <div className="roadmapContainer">
      <div className="roadmapTitle">
        <h1>Back End</h1>
      </div>
       <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={(e) => onNodeClick(e)}
        fitView
        zoomOnScroll={false}
        panOnDrag={false}
      />
    </div>
  );
}

export default RoadMap;

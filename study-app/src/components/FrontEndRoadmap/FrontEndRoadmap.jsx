import React, { useState } from "react";
import ReactFlow, { MarkerType, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

function FrontEndRoadmap({ setSelectedNode }) {
  const onNodeClick = (e) => {
    console.log(e.target.innerText); //prints label name
    setSelectedNode(e.target.innerText);
  };

  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      type: "customNode",
      data: {
        label: "HTML",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
    },
    {
      id: "2",
      position: { x: 200, y: 0 },
      type: "customNode",
      data: {
        label: "CSS",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
    },

    {
      id: "3",
      position: { x: 400, y: 0 },
      type: "customNode",
      data: {
        label: "Java Script",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Left,
      },
    },

    {
      id: "4",
      position: { x: 400, y: 100 },
      type: "customNode",
      data: {
        label: "React JS",
        sourcePosition: Position.Left,
        targetPosition: Position.Top,
      },
    },

    {
      id: "5",
      sourcePosition: "left",
      targetPosition: "right",
      position: { x: 200, y: 100 },
      type: "customNode",
      data: {
        label: "Git",
        sourcePosition: Position.Left,
        targetPosition: Position.Right,
      },
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "black",
      },
      style: {
        strokeWidth: 2,
        stroke: "black",
      },
    },

    {
      id: "e2-3",
      source: "2",
      target: "3",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "black",
      },
      style: {
        strokeWidth: 2,
        stroke: "black",
      },
    },

    {
      id: "e3-4",
      source: "3",
      target: "4",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "black",
      },
      style: {
        strokeWidth: 2,
        stroke: "black",
      },
    },

    {
      id: "e4-5",
      source: "4",
      target: "5",
      animated: true,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "black",
      },
      style: {
        strokeWidth: 2,
        stroke: "black",
      },
    },
  ];

  const CustomNode = ({ data }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        style={{
          fontSize: "12px",
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
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Handle
          type="target"
          position={data.targetPosition}
          style={{ background: "red" }}
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
        <h1>Front End</h1>
      </div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        onNodeClick={(e) => onNodeClick(e)}
        fitView
        zoomOnScroll={false}
        panOnDrag={false}
      />
    </div>
  );
}

export default FrontEndRoadmap;

// import React from "react";
// import ReactFlow, { Background, MarkerType } from "reactflow";

// import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     sourcePosition: "right",
//     targetPosition: "left",
//     position: { x: -100, y: 0 },

//     data: { label: "HTML" },
//   },
//   {
//     id: "2",
//     sourcePosition: "right",
//     targetPosition: "left",
//     position: { x: 100, y: 0 },
//     data: { label: "CSS" },
//   },

//   {
//     id: "3",
//     sourcePosition: "bottom",
//     targetPosition: "left",
//     position: { x: 300, y: 0 },
//     data: { label: "Java Script" },
//   },

//   {
//     id: "4",
//     sourcePosition: "left",
//     targetPosition: "top",
//     position: { x: 300, y: 100 },
//     data: { label: "React JS" },
//   },

//   {
//     id: "5",
//     sourcePosition: "left",
//     targetPosition: "right",
//     position: { x: 100, y: 100 },
//     data: { label: "Git" },
//   },
// ];

// const initialEdges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },

//   {
//     id: "e2-3",
//     source: "2",
//     target: "3",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//       width: 10,
//       height: 10,
//       color: '#FF0072',
//     },
//     style: {
//         strokeWidth: 2,
//         stroke: '#FF0072',
//     }
//   },

//   {
//     id: "e3-4",
//     source: "3",
//     target: "4",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//       width: 10,
//       height: 10,
//       color: '#FF0072',
//     },
//     style: {
//         strokeWidth: 2,
//         stroke: '#FF0072',
//     }
//   },

//   {
//     id: "e4-5",
//     source: "4",
//     target: "5",
//     animated: true,
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//       width: 10,
//       height: 10,
//       color: '#FF0072',
//     },
//     style: {
//         strokeWidth: 2,
//         stroke: '#FF0072',
//     }
//   },
// ];

// function FeRoadmap() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <ReactFlow nodes={initialNodes} edges={initialEdges} />
//     </div>
//   );
// }

// export default FeRoadmap;

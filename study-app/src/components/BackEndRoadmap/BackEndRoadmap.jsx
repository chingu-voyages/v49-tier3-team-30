import React, { useState } from "react";
import ReactFlow, { MarkerType, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

function BackEndRoadmap() {
  

  const onNodeClick = (e) => {
    console.log(e.target.innerText); //prints label name
  };

  const initialNodes = [
    {
      id: "1",
      position: { x: 0, y: -47 },
      type: "customNode",
      data: {
        label: "JavaScript (Node.js)",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
    },
    {
      id: "2",
      position: { x: 200, y: -40 },
      type: "customNode",
      data: {
        label: "Git & GitHub",
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
    },

    {
      id: "3",
      position: { x: 400, y: -40 },
      type: "customNode",
      data: {
        label: "Databases",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Left,
      },
    },

    {
      id: "4",
      position: { x: 400, y: 70 },
      type: "customNode",
      data: {
        label: "APIs",
        sourcePosition: Position.Left,
        targetPosition: Position.Top,
      },
    },

    {
      id: "5",
      sourcePosition: "left",
      targetPosition: "right",
      position: { x: 200, y: 70 },
      type: "customNode",
      data: {
        label: "Caching",
        sourcePosition: Position.Left,
        targetPosition: Position.Right,
      },
    },

    {
      id: "6",
      sourcePosition: "left",
      targetPosition: "right",
      position: { x: 0, y: 70 },
      type: "customNode",
      data: {
        label: "Testing",
        sourcePosition: Position.Bottom,
        targetPosition: Position.Right,
      },
    },
    {
      id: "7",
      sourcePosition: "left",
      targetPosition: "right",
      position: { x: 0, y: 190 },
      type: "customNode",
      data: {
        label: "Deployment",
        sourcePosition: Position.Left,
        targetPosition: Position.Top,
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
      // animated: true,
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
      id: "e5-6",
      source: "5",
      target: "6",
      // animated: true,
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
      id: "e6-7",
      source: "6",
      target: "7",
      // animated: true,
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

export default BackEndRoadmap;

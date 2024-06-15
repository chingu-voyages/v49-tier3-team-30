import { useEffect, useRef, useState } from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
import mapBackgr from "../../assets/map.jpg";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function RoadMap({ nodes, edges, courseName, authState }) {
  const [lessonData, setLessonData] = useState(null);
  console.log("authState=========================================", authState)

  const reactFlowWrapper = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (reactFlowWrapper.current && reactFlowWrapper.current.contains(e.target)) {
        e.preventDefault();
        window.scrollBy(0, e.deltaY);
      }
    };

    const reactFlowWrapperCurrent = reactFlowWrapper.current;
    if (reactFlowWrapperCurrent) {
      reactFlowWrapperCurrent.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (reactFlowWrapperCurrent) {
        reactFlowWrapperCurrent.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);



  const getLessonDetails = async (e) => {
    try {
      const id = e.target.id;
      if (!id) return;
      const lessonDetails = await axios.get(`${serverUrl}/lesson/${id}`);

      console.log("lessonDetails.data", lessonDetails.data);
      setLessonData(lessonDetails.data[0]);
      console.log("setLessonData", lessonData);
    } catch (err) {
      console.log(err);
    }
  };

  

  const CustomNode = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    //console.log("dataaaaaa", data); //here I can find the id of lessons data?._id
    const customStyle = {
      background: "transparent",
      border: "1px solid transparent",
      minWidth: "1px",
      minHeight: "1px",
      width: "1px",
      height: "1px",  
    }
    const targetStyle = {...customStyle, [data.targetPosition]: '0px'}      
    const sourceStyle = {...customStyle, [data.sourcePosition]: '0px'}

    return (
      <div
        id={data?._id}
        style={{
          width: "4.5rem",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 5,
          border: "1px solid #222",
          borderRadius: 8,
          backgroundColor: hovered ? "#A1CC5C" : "#ABD95F",
          fontSize: "0.5rem",
          fontFamily: "Courier Prime, monospace",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={getLessonDetails}
      >
        {data.label}
        <Handle
          type="target"
          position={data.targetPosition}
          style={targetStyle}
        />
        <Handle
          type="source"
          position={data.sourcePosition}
          style={sourceStyle}
        />
      </div>
    );
  };

  const nodeTypes = {
    customNode: CustomNode,
  };

  //we cannot use onNodeClick  because React Flow wraps each Custom node with additional div. This additional div does not have lesson id but due to event bubbling sometimes our Custom node div handles a click and causes getLessonDetail logic to work, and sometimes a click event is handled  by React Flow node wrap and getLessonDetail logic does not work. That is why getLessonDetails functios is hadles afte click event from React Flow div.

  return (
    <div
      className="roadmapContainer"
    >
      <div className="roadmapTitle">
        <div className="roadmapText">{courseName}</div>
        <div>You have completed ...% of the course</div>
      </div>
      <div ref={reactFlowWrapper}>
        
      </div>
      <div ref={reactFlowWrapper} style={{width: '100%', height: '100%'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        zoomOnScroll={false}
        panOnDrag={true}
        panOnScroll={false}
        style={{width: '100%', height: '100%'}}
      />
      </div>
      {lessonData && (
        <RightSideMenu
          lessonData={lessonData}
          setLessonData={setLessonData}
          authState={authState}
        />
      )}
    </div>
  );
}

export default RoadMap;

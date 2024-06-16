import { useEffect, useRef, useState } from "react";
import ReactFlow, { Handle } from "reactflow";
import "reactflow/dist/style.css";
import axios from "axios";
import RightSideMenu from "../RightSideMenu/RightSideMenu";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function RoadMap({ nodes, edges, courseName, authState, setAuthState }) {
  const { completedLessons } = authState;
  const [lessonData, setLessonData] = useState(null);
  const [percent, setPercent] = useState(null);
  const reactFlowWrapper = useRef(null);

  useEffect(() => {
    if (!completedLessons || !nodes) return;
    if (!nodes.length) return setPercent(null);
    const courseLessons = nodes.map((n) => n.data._id);
    const currCourseCompleted = courseLessons.filter((les) =>
      completedLessons.includes(les)
    );
    const newPercent = Math.round(
      (100 * currCourseCompleted.length) / courseLessons.length
    );
    setPercent(newPercent);
  }, [completedLessons, nodes]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        reactFlowWrapper.current &&
        reactFlowWrapper.current.contains(e.target)
      ) {
        e.preventDefault();
        //window.scrollBy(0, e.deltaY); //as I set up a static background, I would like to add event listener to appContainer. not to windoq
        document.getElementById("appContainer").scrollBy(0, e.deltaY);
        //window.scrollTo(0,0)
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
      setLessonData(lessonDetails.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const CustomNode = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    const customStyle = {
      background: "transparent",
      border: "1px solid transparent",
      minWidth: "1px",
      minHeight: "1px",
      width: "1px",
      height: "1px",
    };
    const targetStyle = { ...customStyle, [data.targetPosition]: "0px" };
    const sourceStyle = { ...customStyle, [data.sourcePosition]: "0px" };

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
    <div className="roadmapContainer">
      <div className="roadmapTitle">
        <div className="roadmapText">{courseName}</div>
        <div>
          {percent ? `You have completed ${percent}% of the course` : ""}
        </div>
      </div>

      <div
        ref={reactFlowWrapper}
        style={{ width: "100%", height: "100%" }}
        className="wrapContainer"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          zoomOnScroll={false}
          panOnDrag={true}
          panOnScroll={false}
        />
      </div>
      {lessonData && (
        <RightSideMenu
          lessonData={lessonData}
          setLessonData={setLessonData}
          authState={authState}
          setAuthState={setAuthState}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}

export default RoadMap;

import axios from "axios";
import { Position, MarkerType, } from "reactflow";


//const courses = ['Front End', 'Back End', 'Name1', 'Name2']

function LeftSideMenu({ courses, setMode, mode, setEdges, setNodes, setCourseName }) {
  const selectCourse = async (i) => {
    console.log("Course selected", i);
    setMode(mode === courses[i] ? "" : courses[i]);
   

    try {
      const response = await axios.get(
        `http://localhost:3004/course/${courses[i]}`
      );
      console.log("response", response.data);     
     
      const nodes = response.data[0].nodes.map((node) => {
        const newNode = {...node};
        const {sourcePosition, targetPosition} = node.data;

        const positions = {
          'Position.Right': Position.Right,
          'Position.Left': Position.Left,
          'Position.Top': Position.Top,
          'Position.Bottom': Position.Bottom
        }

        if (targetPosition) 
          newNode.data.targetPosition = positions[targetPosition];

        if (sourcePosition) 
          newNode.data.sourcePosition = positions[sourcePosition];
        newNode.data.lesson = "id from data base";

        return newNode;
      })


      const edges = response.data[0].edges.map((edge) => {

        const newEdge = {...edge};
        newEdge.markerEnd.type = MarkerType.ArrowClosed

        return newEdge;
      })



      setNodes(nodes);
      setEdges(edges);
      setCourseName(courses[i])


    } catch (err) {
      console.log(err);
    }
  };
  //className="courseName"

  return (
    <div className="leftSideMenuSection">
      <div className="leftSideMenuContainer">
        {courses.map((course, id) => (
          <div
            className={
              mode === courses[id] ? "courseNameSelected" : "courseName"
            }
            onClick={() => selectCourse(id)}
            key={id}
          >
            {course}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default LeftSideMenu;

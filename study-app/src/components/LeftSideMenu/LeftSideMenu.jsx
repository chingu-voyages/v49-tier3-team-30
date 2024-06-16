import axios from "axios";
import { Position, MarkerType, } from "reactflow";
const serverUrl = import.meta.env.VITE_SERVER_URL


//const courses = ['Front End', 'Back End', 'Name1', 'Name2']

function LeftSideMenu({ courses, setMode, mode, setEdges, setNodes, setCourseName }) {
  const selectCourse = async (i) => {   
    setMode(mode === courses[i] ? "" : courses[i]);  

    try {
      const response = await axios.get(
        `${serverUrl}/course/${courses[i]}`
      ); 
     
      const nodes = response.data[0].nodes.map((node) => {

        //positions comes from BE as strings, but for React Flow they have to be variables:

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
        newNode.data.lesson = "id from data base"; //this example we can see in console.log

        return newNode;
        //------------------------------------------------------------------
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

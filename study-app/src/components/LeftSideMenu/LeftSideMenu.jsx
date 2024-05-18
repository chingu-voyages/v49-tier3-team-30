import React from "react";
import { useState } from "react";

const courses = ['Front End', 'Back End', 'Name1', 'Name2']

function LeftSideMenu(props) {

    const selectCourse = (i) => {
        console.log("Course selected", i);
        //props.setMode(courses[i])
        props.setMode(props.mode === courses[i] ? "" : courses[i])
        

    }
    //className="courseName"



  return (
    <div className="leftSideMenuSection">
      <div className="leftSideMenuContainer">
        {courses.map((course, id) => (
            <div className={props.mode===courses[id] ? "courseNameSelected" : "courseName"} onClick={() => selectCourse(id)} key={id}>{course}</div>
        ))}




        {/* <div onClick={(e) => selectCourse(e)} className={`${props.isActive? 'courseNameActive': 'courseName'}`}>Front End</div>
        <div className="courseName">Back End</div>
        <div className="courseName">Name</div>
        <div className="courseName">Name</div> */}
      </div>
    </div>
  );
}

export default LeftSideMenu;

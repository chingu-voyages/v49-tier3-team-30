import React from "react";
import { useState } from "react";

const courses = ['Front End', 'Back End', 'Name', 'Name']

function LeftSideMenu(props) {

    const selectCourse = (i) => {
        console.log("Course selected", i)
    }



  return (
    <div className="leftSideMenuSection">
      <div className="leftSideMenuContainer">
        {courses.map((course, id) => (
            <div className="courseName" onClick={() => selectCourse(id)} key={id}>{course}</div>
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

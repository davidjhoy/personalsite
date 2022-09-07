import React, {useState} from 'react';
import resume from '../assets/Resume.jpg';
import "./resume.css"



function Resume() {
 


  return (
    <div className = "resumecontainer">
      <a href = {resume} download = "David Hoy Resume" target = "_blank">
      <img src = {resume} id = "resumeimage" download/>
      </a>
    </div>
  );
}

export default Resume;
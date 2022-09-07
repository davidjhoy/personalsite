import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React, {useState} from 'react';
import resume from '../assets/Resume.jpg';
import "./resume.css"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

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
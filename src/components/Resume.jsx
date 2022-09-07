import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import React, {useState} from 'react';
import resume from '../assets/Resume.jpg';
import "./resume.css"

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Resume() {
 


  return (
    <div className = "resumecontainer">
      <img src = {resume} id = "resumeimage" />
    </div>
  );
}

export default Resume;
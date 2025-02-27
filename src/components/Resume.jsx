import React from "react";
import "../stylingFiles/Resume.css";

const Resume = () => {
    return (
      <div className="resume-container">
        <h1>My Resume</h1>
        <p>Download my resume <a href="/resume.pdf" download>here</a>.</p>
      </div>
    );
  };

export default Resume;
import React from 'react';
import './Resume.css'; // Import a CSS file to handle your styling

const Resume = () => {
  return (
    <>
   <div><h2 className="resume-title">My Resume</h2></div>
    <div className="resume-container">
      <iframe
        src="/resume.pdf" // Ensure the path to the PDF is correct
        title="Resume"
        className="resume-iframe"
      />
    </div>
    </>
  );
};

export default Resume;



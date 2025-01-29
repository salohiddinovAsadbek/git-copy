import React from "react";
import Img from "../components/img";
import "../styles/projectRight.css";

function ProjectRight() {
  return (
    <div className="projectRight">
      <Img src="projects" />
      <h1>Create your first GitHub project</h1>
      <p>
        Projects are a customizable, flexible tool for planning and tracking
        your work.
      </p>
      <button>New project</button>
    </div>
  );
}

export default ProjectRight;

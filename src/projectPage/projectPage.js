import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "../styles/projectRight.css";
import ProjectRight from "./projectRight";

function ProjectPage() {
  return (
    <div>
      <Navbar />
      <div className="projectPageWrapper">
        <Profile />
        <ProjectRight />
      </div>
    </div>
  );
}

export default ProjectPage;

import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "../styles/projectRight.css";
import ProjectRight from "./projectRight";
import Footer from "../components/footer";

function ProjectPage() {
  return (
    <div>
      <Navbar />
      <div className="projectPageWrapper">
        <Profile />
        <ProjectRight />
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;

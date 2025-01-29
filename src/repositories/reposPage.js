import Navbar from "../components/navbar";
import Profile from "../components/profile";
import RepoWrapper from "./repoWrapper";
import "../styles/repoMain.css";

function RepoMain() {
  return (
    <div>
      <Navbar />
      <div className="repoMainWrapperMain">
        <Profile />
        <RepoWrapper />
      </div>
    </div>
  );
}

export default RepoMain;

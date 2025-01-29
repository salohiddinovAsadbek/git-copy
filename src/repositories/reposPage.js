import Navbar from "../components/navbar";
import Profile from "../components/profile";

function RepoMain() {
  return (
    <div>
      <Navbar />
      <div className="repoMainWrapperMain">
        <Profile />
      </div>
    </div>
  );
}

export default RepoMain;

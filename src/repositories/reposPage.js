import Navbar from "../components/navbar";
import Profile from "../components/profile";
import RepoWrapper from "./repoWrapper";
import "../styles/repoMain.css";
import Footer from "../components/footer";

function RepoMain() {
  return (
    <div>
      <Navbar />
      <div className="repoMainWrapperMain">
        <Profile />
        <RepoWrapper />
      </div>
      <Footer />
    </div>
  );
}

export default RepoMain;

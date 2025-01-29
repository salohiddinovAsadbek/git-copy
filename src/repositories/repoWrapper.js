import Img from "../components/img";

function RepoWrapper() {
  return (
    <div className="repoWrapper">
      <div className="repoForm">
        <input type="text" placeholder="Find a repository..." />
        <div className="typeRepo">
          <p>Type</p>
          <Img src="arrowDownRepo" />
        </div>
      </div>
    </div>
  );
}

export default RepoWrapper;

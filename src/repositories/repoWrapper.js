import { useSelector } from "react-redux";
import Img from "../components/img";
import "../styles/repoMain.css";
import { NavLink } from "react-router-dom";

function RepoWrapper() {
  const repoData = useSelector((state) => state.repoData);

  return (
    <div className="repoWrapper">
      <div className="repoForm">
        <input type="text" placeholder="Find a repository..." />
        <div className="typeRepo">
          <p>Type</p>
          <Img src="arrowDownRepo" />
        </div>
        <div className="typeRepo">
          <p>Language</p>
          <Img src="arrowDownRepo" />
        </div>
        <div className="typeRepo">
          <p>Sort</p>
          <Img src="arrowDownRepo" />
        </div>
        <div className="addRepo">
          <Img src="repoMainWhite" />
          <p>New</p>
        </div>
      </div>
      <div className="repositories">
        {repoData?.map((item) => {
          return (
            <div className="repositoriesCardWrapper" key={item.id}>
              <div className="repositoriesCard">
                <div>
                  <NavLink to={item.clone_url}>{item?.name}</NavLink>
                  <p>{item?.visibility}</p>
                </div>
                <div>
                  <button>
                    <i className="fa-regular fa-star"></i>
                    <p>Star</p>
                  </button>
                  <button>
                    <Img src="arrowDownRepo" />
                  </button>
                </div>
              </div>
              <div className="languagesRepo">
                <div>
                  <p>
                    <span
                      className={`${
                        item.language === "JavaScript"
                          ? "languageRepoJavaScript"
                          : ""
                      } ${item.language === "HTML" ? "languageRepoHtml" : ""}${
                        item.language === "CSS" ? "languageRepoCss" : ""
                      }`}
                    ></span>
                    <span>{item.language}</span>
                  </p>
                  <p>{new Date(item.updated_at).toLocaleString()}</p>
                </div>
                <p className="lineGreenRepo"></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RepoWrapper;

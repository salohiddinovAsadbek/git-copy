import { NavLink } from "react-router-dom";
import "../styles/overview.css";
import Img from "../components/img";
import { useSelector } from "react-redux";

function OverviewRight() {
  const repoData = useSelector((state) => state.repoData);
  const repoDataClone = [...repoData].slice(0, 5);

  return (
    <div className="overViewRight">
      <div className="overViewRightTitle">
        <h1>Pinned</h1>
        <NavLink to="/">Customize your pins</NavLink>
      </div>
      <div className="overRightWrapper">
        {repoDataClone.map((item) => {
          return (
            <div className="overRightCard" key={item.id}>
              <div className="overRightCardInfo">
                <div>
                  <Img src="repoMain" />
                  <NavLink to={item.clone_url}>
                    {item.name}
                    <p className="onHoverPin">{item.name}</p>
                  </NavLink>
                  <p>{item.visibility}</p>
                </div>
                <Img src="dots" />
              </div>
              <div
                className={`language ${
                  item.language === "JavaScript" ? "languageJavaScript" : ""
                } ${item.language === "CSS" ? "languageCss" : ""} ${
                  item.language === "HTML" ? "languageHtml" : ""
                }`}
              >
                <div></div>
                <p>{item.language}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewRight;

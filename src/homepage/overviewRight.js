import { NavLink } from "react-router-dom";
import "../styles/overview.css";
import { useEffect } from "react";
import Img from "../components/img";
import { useDispatch, useSelector } from "react-redux";
import { sendRepo } from "../store/slices/repos";

function OverviewRight() {
  const dispatch = useDispatch();
  const repoData = useSelector((state) => state.repoData);
  useEffect(() => {
    fetch("https://api.github.com/users/salohiddinovAsadbek/repos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(sendRepo(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [repoData]);

  return (
    <div className="overViewRight">
      <div className="overViewRightTitle">
        <h1>Pinned</h1>
        <NavLink to="/">Customize your pins</NavLink>
      </div>
      <div className="overRightWrapper">
        {repoData.map((item) => {
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

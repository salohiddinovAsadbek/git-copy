import "../styles/routing.css";
import Img from "../components/img";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Routing() {
  const [repoLength, setRepo] = useState(0);
  const [projectsLength, setProjects] = useState(0);
  const where = useLocation();
  useEffect(() => {
    fetch("https://api.github.com/users/salohiddinovAsadbek/repos")
      .then((res) => res.json())
      .then((repo) => {
        setRepo(repo.length);
        console.log(repo);
      });
    fetch("https://api.github.com/users/salohiddinovAsadbek/projects")
      .then((res) => res.json())
      .then((repo) => {
        setProjects(repo.length);
      });
  }, []);

  const routesys = [
    {
      path: "/",
      img: <Img src="overview" />,
      title: "Overview",
      count: 0,
      isOpen: where.pathname === "/",
    },
    {
      path: "/repositories",
      img: <i className="fa-solid fa-book"></i>,
      title: "Repositories",
      count: repoLength,
      isOpen: where.pathname === "/repositories",
    },
    {
      path: "/",
      img: <Img src="projects" />,
      title: "Projects",
      count: projectsLength,
    },
    {
      path: "/",
      img: <Img src="cub" />,
      title: "Packages",
      count: projectsLength,
    },
    {
      path: "/",
      img: <i className="fa-regular fa-star"></i>,
      title: "Stars",
      count: 3,
    },
  ];

  return (
    <div className="routing">
      {routesys.map((item, index) => {
        return (
          <div
            key={index}
            className={`${item?.isOpen ? "alreadyNavigate" : ""}`}
          >
            <NavLink to={item.path}>
              {item.img}
              <p>{item.title}</p>
              <p style={{ display: item.count > 0 ? "flex" : "none" }}>
                {item.count}
              </p>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Routing;

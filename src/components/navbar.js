import "../styles/navbar.css";
import Img from "./img";
import "../styles/menu.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isShow, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="home">
      <div className="homeLeft">
        <button
          className="menuButton"
          onClick={() => {
            setShow(true);
            setMenu(true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <button className="logoButton">
          <i className="fa-brands fa-github"></i>
        </button>
        <h1 className="userTitle">salohiddinovAsadbek</h1>
      </div>
      <div className="homeRight">
        <button
          className="searchButton"
          onClick={() => {
            setSearch(true);
            setShow(true);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>Type</p>
          <span>/</span>
          <p>to search</p>
        </button>
        <div className="copilot">
          <button className="copilotButton">
            <i className="fa-brands fa-github-alt"></i>
          </button>
          <p></p>
          <button className="arrowDown">
            <Img src="arrowDown" />
          </button>
        </div>
        <div className="lineNavbar"></div>
        <button className="plus">
          <i className="fa-solid fa-plus"></i>
          <Img src="arrowDown"></Img>
        </button>
        <button className="issues">
          <p>
            <i className="fa-solid fa-circle"></i>
          </p>
        </button>
        <button className="pullRequests">
          <i className="fa-solid fa-code-pull-request"></i>
        </button>
        <button className="pullRequests">
          <i className="fa-solid fa-inbox"></i>
        </button>
        <button className="profile">
          <i className="fa-regular fa-circle-user"></i>
        </button>
      </div>
      <div
        className="menu"
        style={{ display: isShow ? "flex" : "none" }}
        onClick={() => {
          setShow(false);
          setMenu(false);
          setSearch(false);
        }}
      >
        <div
          className="menuWrapper"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
            setMenu(true);
          }}
          style={{ display: menu ? "flex" : "none" }}
        >
          <div className="menuWrapperTop">
            <i className="fa-brands fa-github"></i>
            <button
              className="closeMenu"
              onClick={(e) => {
                e.stopPropagation();
                setMenu(false);
                setShow(false);
              }}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div>
            <nav className="menuNavbar">
              <NavLink>
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
              </NavLink>
              <NavLink>
                <Img src="circle" />
                <p>Issues</p>
              </NavLink>
              <NavLink>
                <i className="fa-solid fa-code-pull-request"></i>
                <p>Pull requests</p>
              </NavLink>
              <NavLink>
                <Img src="projects" />
                <p>Projects</p>
              </NavLink>
              <NavLink>
                <Img src="discussions" />
                <p>Discussions</p>
              </NavLink>
              <NavLink>
                <Img src="codespaces" />
                <p>Codespaces</p>
              </NavLink>
              <NavLink>
                <i className="fa-brands fa-github-alt"></i>
                <p>Copilot</p>
              </NavLink>
              <div className="lineMenu"></div>
              <NavLink>
                <Img src="telescope" />
                <p>Explore</p>
              </NavLink>
              <NavLink>
                <i className="fa-solid fa-gift"></i>
                <p>Marketplace</p>
              </NavLink>
              <div className="lineMenu"></div>
            </nav>
            <div className="repositoriesMenu">
              <div>
                <p>Repositories</p>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="footerMenu">
              <p>© 2025 GitHub, Inc.</p>
              <div className="securityMenu">
                <NavLink>About</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Terms</NavLink>
                <NavLink>Privacy</NavLink>
                <NavLink>Security</NavLink>
                <NavLink>Status</NavLink>
                <NavLink>Do not share my personal information</NavLink>
                <NavLink>Manage cookies</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div
          className="searchMenu"
          style={{ display: search ? "flex" : "none" }}
        >
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
            <button>
              <Img src="closeIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

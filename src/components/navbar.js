import "../styles/navbar.css";
import Img from "./img";
import "../styles/menu.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/search.css";

function Navbar() {
  const [isShow, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [inputValue, setValue] = useState("salohiddinovAsadbek");
  const [isInputName, setInputName] = useState(true);
  const [copilot, setCopilot] = useState(false);

  useEffect(() => {
    if (inputValue.length === 0) {
      setInputName(false);
      setCopilot(true);
    }
  }, [inputValue.length]); // search on input bolganda copilot ham

  useEffect(() => {
    fetch("https://api.github.com/users/azamjonbro/repos")
      .then((res) => res.json())
      .then((repo) => {
        console.log(repo);
      });
  }, [inputValue]);

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
          <button className="arrowDown">
            <Img src="arrowDown" />
            <p className="arrowDownInfo onHoverInfo">
              <span>Open</span>
              <span>Copilot...</span>
            </p>
            <div className="newConversation">
              <p>New conversation</p>
              <div className="immersive">
                <Img src="immersive" />
                <span>Immersive</span>
              </div>
              <p className="conversationLine"></p>
              <div className="openWith">
                <p>
                  <i className="fa-brands fa-github-alt"></i>
                  <span>Open with</span>
                </p>
                <Img src="arrowRight" />
              </div>
              <p>
                <i className="fa-solid fa-gear"></i>
                <span>Settings</span>
              </p>
            </div>
          </button>
        </div>
        <div className="lineNavbar"></div>
        <button className="plus">
          <i className="fa-solid fa-plus"></i>
          <Img src="arrowDown"></Img>
          <p className="plusInfo inHoverInfo">
            <span>Create</span>
            <span>new...</span>
          </p>
        </button>
        <button className="issues">
          <p>
            <i className="fa-solid fa-circle"></i>
          </p>
          <div className="issuesInfo onHoverInfo">
            <span>Issues</span>
          </div>
        </button>
        <button className="pullRequests">
          <i className="fa-solid fa-code-pull-request"></i>
          <p className="pullRequestsInfo onHoverInfo">
            <span>Pull</span>
            <span>requests</span>
          </p>
        </button>
        <button className="pullRequests">
          <i className="fa-solid fa-inbox"></i>
          <p className="pullRequestsInfo onHoverInfo">
            <span>You</span>
            <span>have</span>
            <span>no</span>
            <span>unread</span>
            <span>notifications</span>
          </p>
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
          onClick={(e) => {
            e.stopPropagation();
            // setShow(true);
            // setSearch(true);
          }}
        >
          <div className="searchInput">
            <i className="fa-solid fa-magnifying-glass"></i>
            <label htmlFor="">
              <span style={{ display: isInputName ? "flex" : "none" }}>
                {inputValue}
              </span>
              <input
                type="text"
                className="inputType"
                value={inputValue}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </label>
            <button
              onClick={() => {
                setShow(false);
                setSearch(false);
              }}
            >
              <Img src="closeIconWhite" />
            </button>
          </div>
          <div className="copilotSearch">
            <p>Copilot</p>
            <div style={{ display: copilot ? "flex" : "none" }}>
              <p>
                <i className="fa-brands fa-github-alt"></i>
                <span>Ask Copilot</span>
              </p>
              <NavLink>Start a new Copilot thread</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

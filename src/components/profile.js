import { useSelector } from "react-redux";
import "../styles/profile.css";
import Img from "./img";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Profile() {
  const userget = useSelector((state) => state.userinfo);

  setTimeout(() => {
    console.log(userget);
  }, 5000);

  const navigate = useNavigate();

  return (
    <div className="profileMain">
      <div className="imgProfile">
        <img src={`${userget.avatar_url}`} alt="user" />
        <button className="setStatus">
          <i className="fa-regular fa-face-smile smile"></i>
          <p className="setStatusp">Set status</p>
        </button>
      </div>
      <div className="nameProfile">
        <h1>{userget.name}</h1>
        <p>
          <span>{userget.login}</span>
          <span>•</span>
          <span>he/him</span>
        </p>
      </div>
      <p className="bio">{userget.bio}</p>
      <button className="editProfile">Edit profile</button>
      <div className="followingSection">
        <p className="followingBlue">
          <i className="fa-solid fa-user-group"></i>
          <span className="followN">{userget.followers}</span>
          <span className="followS">followers</span>
        </p>
        <span>•</span>
        <p
          className="followingBlue"
          onClick={() => {
            navigate("/following");
          }}
        >
          <span className="followN">{userget.following}</span>
          <span className="followS">following</span>
        </p>
      </div>
      <div className="userEditInfo">
        <NavLink style={{ display: userget?.company ? "flex" : "none" }}>
          <Img src="buildingRepository" />
          <p>{userget?.company}</p>
        </NavLink>
        <NavLink style={{ display: userget?.location ? "flex" : "none" }}>
          <i className="fa-solid fa-location-dot"></i>
          <p>{userget?.location}</p>
        </NavLink>
        <NavLink style={{ display: userget?.email ? "flex" : "none" }}>
          <i className="fa-regular fa-envelope"></i>
          <p>{userget?.email}</p>
        </NavLink>
        <NavLink
          style={{ display: userget?.blog ? "flex" : "none" }}
          to={userget.blog}
        >
          <i className="fa-solid fa-link"></i>
          <p>{userget?.blog}</p>
        </NavLink>
        <NavLink
          style={{ display: userget?.twitter_username ? "flex" : "none" }}
        >
          <i className="fa-brands fa-x-twitter"></i>
          <p>@{userget?.twitter_username}</p>
        </NavLink>
        <NavLink
          style={{ display: userget?.twitter_username ? "flex" : "none" }}
        >
          <i className="fa-brands fa-youtube"></i>
          <p>@MrxCapitain</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Profile;

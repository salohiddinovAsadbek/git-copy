import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { send } from "../store/slices/userInfo";
import "../styles/profile.css";
import Img from "./img";

function Profile() {
  const dispatch = useDispatch();
  const [userInfos, setUserInfo] = useState([]);
  const userget = useSelector((state) => state.userinfo);

  useEffect(() => {
    fetch("https://api.github.com/users/salohiddinovAsadbek")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    dispatch(send(userInfos));
  }, [userInfos]);

  setTimeout(() => {
    console.log(userget);
  }, 5000);

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
        <p className="followingBlue">
          <span className="followN">{userget.following}</span>
          <span className="followS">following</span>
        </p>
      </div>
      <div className="userEditInfo">
        <div style={{ display: userget?.company ? "flex" : "none" }}>
          <Img src="buildingRepository" />
          <p>{userget?.company}</p>
        </div>
        <div style={{ display: userget?.location ? "flex" : "none" }}>
          <i className="fa-solid fa-location-dot"></i>
          <p>{userget?.location}</p>
        </div>
        <div style={{ display: userget?.email ? "flex" : "none" }}>
          <i className="fa-regular fa-envelope"></i>
          <p>{userget?.email}</p>
        </div>
        <div style={{ display: userget?.blog ? "flex" : "none" }}>
          <i className="fa-solid fa-link"></i>
          <p>{userget?.blog}</p>
        </div>
        <div style={{ display: userget?.twitter_username ? "flex" : "none" }}>
          <i className="fa-brands fa-x-twitter"></i>
          <p>@{userget?.twitter_username}</p>
        </div>
        <div style={{ display: userget?.twitter_username ? "flex" : "none" }}>
          <i className="fa-brands fa-youtube"></i>
          <p>@MrxCapitain</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

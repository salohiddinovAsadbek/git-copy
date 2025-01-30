import { useEffect, useState } from "react";
import Img from "../components/img";

function FollowingType({ user }) {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <div className="followingCard">
      <div>
        <img src={userInfo.avatar_url} alt="avatar" />
        <div className="followingInfo">
          <p>
            <span>{userInfo.name}</span>
            <span>{userInfo.login}</span>
          </p>
          {userInfo.bio !== null ? (
            <p className="bioFollowing">{userInfo.bio}</p>
          ) : (
            ""
          )}
          <div className="extraInfoFollowing">
            {userInfo?.company !== null ? (
              <div>
                <Img src="buildingRepository" />
                <span>{userInfo.company}</span>
              </div>
            ) : (
              ""
            )}
            {userInfo.location !== null ? (
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span>{userInfo.location}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <button>Unfollow</button>
    </div>
  );
}

export default FollowingType;

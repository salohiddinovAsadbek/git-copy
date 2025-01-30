import Navbar from "../components/navbar";
import "../styles/following.css";
import Profile from "../components/profile";
import { useSelector } from "react-redux";
import FollowingType from "./follwingType";
import Footer from "../components/footer";

function Follow() {
  const following = useSelector((state) => state.following);

  return (
    <div>
      <Navbar />
      <div className="following">
        <Profile />
        <div className="followingWrapper">
          {following.map((item) => {
            return <FollowingType user={item.login} key={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Follow;

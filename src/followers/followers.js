import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import FollowingType from "../followingPage/follwingType";
import Footer from "../components/footer";
import "../styles/following.css";

function Followers() {
  const following = useSelector((state) => state.followingers);

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

export default Followers;

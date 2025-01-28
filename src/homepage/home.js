import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "../styles/style.css";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <Profile />
    </div>
  );
}

export default Home;

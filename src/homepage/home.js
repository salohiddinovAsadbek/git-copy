import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import "../styles/style.css";
import OverviewRight from "./overviewRight";

function Home() {
  return (
    <div className="homePage">
      <Navbar />
      <div className="homeMainWrapper">
        <Profile />
        <OverviewRight />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

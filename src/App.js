import { Route, Routes } from "react-router-dom";
// import Form from "./form";
import "./styles/style.css";
import Home from "./homepage/home";
import RepoMain from "./repositories/reposPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendRepo } from "./store/slices/repos";
import ProjectPage from "./projectPage/projectPage";
import { send } from "./store/slices/userInfo";
import Following from "./followingPage/follow";
import { sendFollowing } from "./store/slices/following";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.github.com/users/salohiddinovAsadbek/repos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(sendRepo(data));
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("https://api.github.com/users/salohiddinovAsadbek")
      .then((res) => res.json())
      .then((data) => {
        dispatch(send(data));
      })
      .catch((error) => {
        console.log(error);
      });
    fetch(`https://api.github.com/users/salohiddinovAsadbek/following`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(sendFollowing(data));
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]); // repositorilarni olish

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<RepoMain />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/following" element={<Following />} />
    </Routes>
  );
}

export default App;

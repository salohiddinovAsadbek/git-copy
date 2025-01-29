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
  }, [dispatch]); // repositorilarni olish

  useEffect(() => {
    fetch("https://api.github.com/users/salohiddinovAsadbek")
      .then((res) => res.json())
      .then((data) => {
        dispatch(send(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<RepoMain />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;

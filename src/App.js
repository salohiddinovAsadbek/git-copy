import { Route, Routes } from "react-router-dom";
// import Form from "./form";
import "./styles/style.css";
import Home from "./homepage/home";
import RepoMain from "./repositories/reposPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<RepoMain />} />
    </Routes>
  );
}

export default App;

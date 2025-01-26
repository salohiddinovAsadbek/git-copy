import { Route, Routes } from "react-router-dom";
// import Form from "./form";
import "./styles/style.css";
import Home from "./homepage/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

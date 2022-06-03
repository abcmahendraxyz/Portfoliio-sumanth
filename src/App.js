import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/create" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

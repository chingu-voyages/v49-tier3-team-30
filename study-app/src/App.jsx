import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/Navbar/Navbar.css";
import "./components/LeftSideMenu/LeftSideMenu.css";
import "./components/RoadMap/RoadMap.css";
import "./components/Main/Main.css";
import "./components/Login/Login.css";
import "./components/Welcome/Welcome.css";
import "./components/Footer/Footer.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
    completedLessons: []
  });
  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${serverUrl}/user/login`);
      setAuthState({
        username: response.data.username,
        id: response.data.userId,
        status: true,
        completedLessons: response.data.completedLessons
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  axios.defaults.withCredentials = true;
  return (
    <div className="appContainer" id="appContainer">
      <Router>
        <Navbar authState={authState} setAuthState={setAuthState} />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main authState={authState} setAuthState={setAuthState}/>} />
          <Route
            path="/login"
            element={<Login setAuthState={setAuthState} />}
          />
        </Routes>
        <Footer authState={authState} setAuthState={setAuthState} />

      </Router>
    </div>
  );
}

export default App;

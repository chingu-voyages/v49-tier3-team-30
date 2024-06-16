import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    aboutMe: "",
  });

  const navigate = useNavigate();
  const registerUser = async () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    try {
      const { data } = await axios.post(`${serverUrl}/user/signup`, {
        username: inputData.username,
        email: inputData.email,
        password: inputData.password,
        aboutMe: inputData.aboutMe,
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await registerUser();
    if (result) {
      setInputData(prev => ({
        ...prev,
        username: "",
        email: "",
        password: "",
        aboutMe: "",
      }));
      navigate("/login");
    }
  };
  const handleChange = e => {
    const { value, name } = e.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div className="signUpContainer">
      <div className="card">
        
        <form onSubmit={handleSubmit} className="inputsContainer">
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Username..."
            
          />
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email..."
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password..."
          />
          <textarea
            onChange={handleChange}
            name="aboutMe"
            type="text"
            value={inputData.aboutMe}
            placeholder="About Me..."
          />
          <button className="submitBtn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;

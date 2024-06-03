import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="signUpContainer">
      <div className="card">
        
        <form onSubmit={() => console.log("hello")} className="inputsContainer">
          <input
            onChange={() => console.log("hello")}
            name="username"
            type="text"
            placeholder="Username..."
          />

          <input
            onChange={() => console.log("hello")}
            name="password"
            type="password"
            placeholder="Password..."
          />

          <button className="submitBtn" type="submit">
            Login
          </button>

          <div className="signUpLinkContainer">
            <div>Don't have an account?</div>
            <div className="signUpLink" onClick={() => navigate("/signup")}>Sign Up</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

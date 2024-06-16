import "../Main/Main.css";
import { GiMountainRoad, GiCompass } from "react-icons/gi";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="aboutAppContainer">
      <div className="appDescription">
        <p>
          The road.map(
          <GiMountainRoad className="logo-about" />) application is a
          cutting-edge educational tool designed to streamline and enhance the
          process of acquiring new web development skills.
        </p>
        <p>
          Whether you are a beginner looking to enter the world of web
          development or an experienced developer seeking to expand your
          expertise, the road.map(
          <GiMountainRoad className="logo-about" />) offers a structured and
          engaging pathway to learning.
        </p>
        <p>
          To keep track of your learning progress you are welcome to{" "}
          <Link to="/signup" className="welcomeSignup">
            sign up
          </Link>
          .
        </p>
        <p>Have a great jorney! </p>
        <div className="compassContainer">
          <GiCompass className="compass" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;

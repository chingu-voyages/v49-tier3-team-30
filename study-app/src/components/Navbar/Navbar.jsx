import "./Navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import user from "../../img/user.png";
import logout from "../../img/log-out.png";
import { useState, useEffect, useRef } from "react";
import { GiHorizonRoad, GiMountainRoad  } from "react-icons/gi";
import { TbRoadSign } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const username = authState.username;
  let menuRef = useRef();

  const handleLogout = async () => {
    const response = await axios.get(`${serverUrl}/user/logout`);
    setAuthState({ username: "", id: 0, status: false });
    console.log("response", response.data);
  };

  //functionality to close dropdown menu if click outside of it-------------
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  //---------------------------------------------------------------------------

  return (
    <div className="navbarSection">
      <Link to="" className="navLink">
          {/* <div>road.map ( <GiHorizonRoad className="logo"/> )</div> */}
          {/* <div>Road<TbRoadSign className="logo arrow"/>Map  </div> */}
          <div>road.map ( <GiMountainRoad className="logo"/> )</div>
          {/* <div><FaMapLocationDot className="logo pin"/>  RoadMap </div> */}          
      </Link>

      {authState.status ? (
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="account-trigger navLink">Account ▾</div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <h3>{username ? `Hello, ${username}` : ""}! </h3>
              <ul>
                <DropdownItem
                  img={user}
                  text={
                    <div
                      className="dropdown-menu-links"
                      onClick={() => navigate("/profile")}
                    >
                      {" "}
                      My Profile{" "}
                    </div>
                  }
                />
                <DropdownItem
                  img={logout}
                  text={
                    <div className="dropdown-menu-links" onClick={handleLogout}>
                      Logout
                    </div>
                  }
                />
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Link to="login" className="navLink" id="loginLink">
          Login
        </Link>
      )}
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <div>{props.text}</div>
    </li>
  );
}

export default Navbar;

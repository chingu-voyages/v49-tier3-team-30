import "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GiMountainRoad } from "react-icons/gi";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Navbar({ authState, setAuthState }) {
  const [open, setOpen] = useState(false);
  const username = authState.username;
  let menuRef = useRef();

  const handleLogout = async () => {
    const response = await axios.get(`${serverUrl}/user/logout`);
    setAuthState({ username: "", id: 0, status: false });
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
        <div>
          road.map (<GiMountainRoad className="logo" />)
        </div>
      </Link>

      {authState.status ? (
        <div className="loginLogoutContainer">
          <div className="greeting">Hello, {username}!</div>
          <div id="logoutLink" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : (
        <div className="loginLogoutContainer">
          <Link to="login" className="navLink" id="loginLink">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

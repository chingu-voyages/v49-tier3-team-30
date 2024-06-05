import { Link } from "react-router-dom";
import "./Navbar";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

import user from "../../img/user.png";
import logout from "../../img/log-out.png";
import { useState } from "react";

function Navbar({ authState, setAuthState }) {
  const handleLogout = async () => {
    const response = await axios.get(`${serverUrl}/user/logout`);
    setAuthState({ username: "", id: 0, status: false });
    console.log("response", response.data);
  };

  const [open, setOpen] = useState(false);
  const username = authState.username;

  return (
    <div className="navbarSection">
      <Link to="" className="navLink">
        Home
      </Link>

      {authState.status ? (
        <div className="menu-container">
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="account-trigger navLink">
              {username ? `Hello, ${username}` : ""} ▾
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropdownItem img={user} text={<Link to="profile"> My Profile </Link>} />
                <DropdownItem
                  img={logout}
                  text={<p onClick={handleLogout}>logout</p>}
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
      <p>{props.text}</p>
    </li>
  );
}

export default Navbar;

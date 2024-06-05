
import "./Navbar";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;
import { useNavigate, Link } from "react-router-dom";

import user from "../../img/user.png";
import logout from "../../img/log-out.png";
import { useState } from "react";

function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();
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
              Account ▾
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>{username ? `Hello, ${username}` : ""}! </h3>
              <ul>
                <DropdownItem img={user} text={<div className="dropdown-menu-links" onClick={() => navigate('/profile')}> My Profile </div>} />
                <DropdownItem
                  img={logout}
                  text={<div className="dropdown-menu-links" onClick={handleLogout}>Logout</div>}
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

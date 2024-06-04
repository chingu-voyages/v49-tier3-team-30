import { Link } from "react-router-dom";
import "./Navbar";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Navbar({ authState, setAuthState }) {
  const handleLogout = async () => {
    const response = await axios.get(`${serverUrl}/user/logout`);
    setAuthState({ username: "", id: 0, status: false });
    console.log("response", response.data);
  };

  return (
    <div className="navbarSection">
      <Link to="" className="navLink">
        Home
      </Link>

      {authState.status ? (
        <ul id="logoutLink">
          <div>
            <div className="navLink">Account ▼</div>
          </div>

          <ul className="dropdown">
            <li>
              <Link className="navLink" to="/profile">
                Profile
              </Link>
            </li>
            {authState.status && (
              <li className="navLink" onClick={handleLogout}>
                Logout
              </li>
            )}
          </ul>
        </ul>
      ) : (        
        <Link to="login" className="navLink" id="loginLink">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/Navbar/Navbar.css";
import "./components/LeftSideMenu/LeftSideMenu.css";
import "./components/RoadMap/RoadMap.css";
import "./components/Main/Main.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
	return (
		<div className="appContainer">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/profile" element={<ProfilePage />} />
					{/* 
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;

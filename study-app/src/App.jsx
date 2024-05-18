

import './App.css'
import './components/FrontEndRoadmap/FrontEndRoadmap.css'
import './components/LeftSideMenu/LeftSideMenu.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontEndRoadmap from './components/FrontEndRoadmap/FrontEndRoadmap';
import Navbar from './components/Navbar/Navbar';
import LeftSideMenu from './components/LeftSideMenu/LeftSideMenu';
import { useState } from 'react';




function App() {

  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LeftSideMenu isActive={isActive} setIsActive={setIsActive}/>}/>
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

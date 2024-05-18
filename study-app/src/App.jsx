

import './App.css'
import './components/FrontEndRoadmap/FrontEndRoadmap.css'
import './components/LeftSideMenu/LeftSideMenu.css'
import './components/Main/Main.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() { 

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />}/>
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

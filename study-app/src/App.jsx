

import './App.css'
import './components/FrontEndRoadmap/FrontEndRoadmap.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontEndRoadmap from './components/FrontEndRoadmap/FrontEndRoadmap';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';




function App() {

  return (
    <div className="App">
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

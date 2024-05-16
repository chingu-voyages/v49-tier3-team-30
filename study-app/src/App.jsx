

import './App.css'
import './components/FrontEndRoadmap/FrontEndRoadmap.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontEndRoadmap from './components/FrontEndRoadmap/FrontEndRoadmap';
import Navbar from './components/Navbar/Navbar';



function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<FrontEndRoadmap />}/>
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

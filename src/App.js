
import './App.css';
import  Login  from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import img from "./img.png"
import Verify from './Verify';
import Dashboard from './Dashboard/Dashboard';
import Warden from './Dashboard/Warden';
import Student from './Dashboard/Student';
import Security from './Dashboard/Security';

function App() {
  return (
    <div >
  
      
      
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verification" element={<Verify/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/warden" element={<Warden/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/home" element={<Dashboard/>} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import ContactUs from './ContactUs';
import { Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contactUs" element={<ContactUs />} />

      </Routes>

    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
      <Element name="home" id="home">
        <Home />
      </Element>
      <Element name="contact" id="contact">
        <Contact />
      </Element>
    </Router>
  );
}

export default App;

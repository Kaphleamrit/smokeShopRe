import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import logo from './assets/logo.png';
import Home from './components/Home'
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#003300' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <img src={logo} alt="A's Smoke Shop" style={{ height: 50 }} />
          </Link>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Favourites from './views/Favourites.jsx';
import Cart from './views/Cart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

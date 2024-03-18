/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
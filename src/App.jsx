/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Favourites from './views/Favourites.jsx';
import Cart from './views/Cart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

let appContext = createContext();
const products = [{id:0, name:"burger", category:"burger", price:0},{id:0, name:"cheeseburger", category:"burger", price:0}]


const App = () => {
  const [cart, setCart] = useState(products)

  return (
    <div>
    <appContext.Provider value={{cart, setCart}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
</appContext.Provider>
    </div>
  );
};

export{App, appContext};

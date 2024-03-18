/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import heart icon from react-icons library
import burgerImage from '../../assets/burger1.png';
import "./Cards.css";

function Card({ title, description, onToggleFavorite }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-image-container">
          <img className="card-image" src={burgerImage} alt="Burger" />
          <button className="favorite-button" onClick={() => onToggleFavorite(title)}>
            <FaHeart />
          </button>
          <hr />
        </div>
        <p className="card-description">{description}</p>
        <button className='add-to-cart'>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;

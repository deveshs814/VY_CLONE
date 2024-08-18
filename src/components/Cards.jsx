import React from 'react';
import './Cards.css'; 

const Cards = ({ image, title, content }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{content}</p>
      </div>
    </div>
  );
}

export default Cards;

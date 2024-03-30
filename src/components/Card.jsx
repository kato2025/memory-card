//Import the React library and css file
import React from 'react';
import './Card.css';
// Card component that displays an image
const Card = ({ id, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={imageUrl} alt="card" className="card-image" />
    </div>
  );
};
// Export the Card component
export default Card;

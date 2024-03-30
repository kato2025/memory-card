//Import the React library and css file
import React from 'react';
import './Scoreboard.css'; 
// Scoreboard component that displays the current score and best score
const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="score">Current Score: {currentScore}</div>
      <div className="scoreTitle">SCOREBOARD</div>
      <div className="score">Best Score: {bestScore}</div>
    </div>
  );
};
// Export the Scoreboard component
export default Scoreboard;

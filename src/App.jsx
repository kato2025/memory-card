//Import the React library and the Card, Scoreboard and fetchCards components
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import { fetchCards } from './services/api';
// Create the App component that fetches the cards data and renders the Card and Scoreboard components
const App = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
// Use the useEffect hook to fetch the cards data when the component mounts
  useEffect(() => {
    fetchCardsData();
  }, []);
// Create the fetchCardsData function to fetch the cards data and shuffle the cards
  const fetchCardsData = async () => {
    const data = await fetchCards();
    setCards(data);
    shuffleCards(data);
  };
// Create the shuffleCards function to shuffle the cards
  const shuffleCards = () => {
    setCards(prevCards => {
      const shuffledCards = [...prevCards].sort(() => Math.random() - 0.5);
      return shuffledCards;
    });
  };
// Create the handleCardClick function to handle the card click event
  const handleCardClick = (clickedId) => {
    if (clickedCards.includes(clickedId)) {
      // Clicked the same card again, game over
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      // Clicked a new card, update score
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, clickedId]);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    }
    shuffleCards();
  };
// Render the Scoreboard and Card components
  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="card-container">
        {cards.map(card => (
          <Card key={card.id} id={card.id} imageUrl={card.imageUrl} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
// Export the App component
export default App;

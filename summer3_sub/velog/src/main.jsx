import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from '../component/Nav';
import List from '../component/List';
import Act from '../component/Act';
import Full from '../component/Full';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseClick = () => {
    setSelectedCard(null);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {!selectedCard ? (
        <>
          <Nav darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} selectedCard={selectedCard} />
          <List darkMode={darkMode} handleCardClick={handleCardClick} />
          <Act darkMode={darkMode} handleCardClick={handleCardClick} />
        </>
      ) : (
        <>
          <Nav darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} selectedCard={selectedCard} />
          <Full
            darkMode={darkMode}
            title={selectedCard.title}
            image={selectedCard.image}
            username={selectedCard.username}
            content={selectedCard.content}
            date={selectedCard.date}
          />
          <button onClick={handleCloseClick}>Close</button>
        </>
      )}
    </div>
  );
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
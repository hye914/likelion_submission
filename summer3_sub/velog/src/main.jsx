import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from '../component/Nav';
import List from '../component/List';
import Act from '../component/Act';
import Full from '../component/Full';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseClick = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {!selectedCard ? (
        <>
          <Nav />
          <List handleCardClick={handleCardClick} />
          <Act handleCardClick={handleCardClick} />
        </>
      ) : (
        <>
          <Nav />
          <Full
            image={selectedCard.image}
            username={selectedCard.username}
            content={selectedCard.content}
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

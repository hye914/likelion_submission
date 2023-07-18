import React from 'react';
import Preview from './Preview';

function Act({ handleCardClick }) {
  const cards = [
    {
      id: 1,
      image: '../img/Nomad.jpg',
      title: 'Hyesuuu',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'Hyesuuu'
    },
    {
      id: 2,
      image: '../img/react.png',
      title: 'Hyesuuu',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'Hyesuuu'
    },
    {
      id: 3,
      image: '../img/router.jpg',
      title: 'Hyesuuu',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'Hyesuuu'
    },
  ];

  return (
    <div style={{ display: 'flex', marginLeft: '50px',width: '90vw', height: '400px' }}>
      {cards.map((card) => (
        <Preview
          key={card.id}
          image={card.image}
          title={card.title}
          content={card.content}
          username={card.username}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
  
}

export default Act;



import React from 'react';
import styled from 'styled-components';
import Preview from './Preview';

const ActContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 600px;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

function Act({ darkMode, handleCardClick }) {
  const cards = [
    {
      id: 1,
      image: '../img/Nomad.jpg',
      title: 'Hyesuuu',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      username: 'Hyesuuu',
      date: '1일전'
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
    <ActContainer darkMode={darkMode}>
      {cards.map((card) => (
        <Preview
          key={card.id}
          image={card.image}
          title={card.title}
          content={card.content}
          username={card.username}
          date={card.date}
          onClick={() => handleCardClick(card)}
          darkMode={darkMode}
        />
      ))}
    </ActContainer>
  );
}

export default Act;

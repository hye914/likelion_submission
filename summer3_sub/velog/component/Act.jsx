import React from 'react';
import styled from 'styled-components';
import Preview from './Preview';
import Content_Nomad from './Nomad';

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
      title: 'Nomad 강의 듣고 Hook',
      content: <Content_Nomad />,
      username: 'Hyesuuu',
      date: '1일전'
    },
    {
      id: 2,
      image: '../img/react.png',
      title: 'React 내용 정리',
      content: '지루하고 반복적인 코딩 작업에서 지쳐 효율성을 올리고싶으시다면 react를 배워보세요 호호',
      username: 'miniminimi',
      date: '2일전'
    },
    {
      id: 3,
      image: '../img/router.jpg',
      title: 'React Router',
      content: 'Router는 길잡이다 너무 어려운 길잡이 호호',
      username: 'DIFFICULT FE',
      date: '3일 전'
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

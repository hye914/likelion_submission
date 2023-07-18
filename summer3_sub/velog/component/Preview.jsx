import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 500px;
  width: 400px;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
`;

const Card = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Image = styled.img`
  height: 300px;
  width: 330px;
`;

const Text = styled.div`
  width: 300px;
  height: 100px;
  overflow: hidden;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

function Preview({ image, title, content, date, username, onClick, darkMode }) {
  return (
    <Wrapper darkMode={darkMode}>
      <Card onClick={onClick} darkMode={darkMode}>
        <Image src={image} alt="Card Image" />
        <h2>{title}</h2>
        <Text darkMode={darkMode}>{content}</Text>
        <p>{date}</p>
        <h4>{username}</h4>
      </Card>
    </Wrapper>
  );
}

export default Preview;

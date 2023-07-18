import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
`;

const Bar = styled.div`
  width: 10%;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Wrap = styled.div`
  display: flex;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

function Full({ image, title, username, content, date, darkMode }) {
  return (
    <Box darkMode={darkMode}>
      <Bar darkMode={darkMode}></Bar> /*하트 bar만들기*/
      <Container darkMode={darkMode}>
        <h1 style={{ marginLeft: '20px' }}>{title}</h1>
        <Wrap  darkMode={darkMode}>
          <h2 style={{ marginLeft: '20px', marginRight: '20px', color: darkMode ? 'white' : 'black' }}>{username}</h2>
          <h3>{date}</h3>
        </Wrap>
        <img src={image} alt="Card Image" style={{ padding: '30px', width: '800px', height: '400px' }} />
        <p style={{ padding: '30px', width: '600px' }}>{content}</p>
      </Container>
    </Box>
  );
}

export default Full;

import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100vw;
  display: flex;
`;

const Bar = styled.div`
  width: 10%;
`;

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
`;



function Full({ image, title, username, content,date }) {
  return (
    <Box>
      <Bar>Hello</Bar>
      <Container>
        <h1 style={{ marginLeft: '20px' }}>{title}</h1>
        <Wrap>
        <h2 style={{ marginLeft: '20px',marginRight: '20px' }}>{username}</h2>
        <h3>{date}</h3>
        </Wrap>
        <img src={image} alt="Card Image" style={{ padding:'30px', width: '800px', height: '400px' }} />
        
        <p style={{ padding:'30px', width: '600px' }}>{content}</p>
      </Container>
    </Box>
  );
}

export default Full;

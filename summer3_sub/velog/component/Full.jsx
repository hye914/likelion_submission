import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 95vw;
  background-color: blue;
  display: flex;
`;

const Bar = styled.div`
  width: 400px;
  background-color: pink;
`;

const Container = styled.div`
  width: 800px;
  background-color: red;
`;

const Title = styled.h2``;

function Full({ image, title, username, content }) {
  return (
    <Box>
    
      <Bar>Hello</Bar>
      <Container>
        <Title>{title}</Title>
        <img src={image} alt="Card Image" />
        <h3>{username}</h3>
        <p>{content}</p>
      </Container>
    </Box>
  );
}

export default Full;

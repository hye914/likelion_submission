import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faShare} from '@fortawesome/free-solid-svg-icons';


const Box = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
`;

const Space = styled.div`
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

const Bar = styled.div`
  width: 80px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  left: 40px;
  top: 200px;
  border-radius: 40px;
  border: 2px solid ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.darkMode ? 'white' : 'black')};
`;


function Full({ image, title, username, content, date, darkMode }) {
  return (
    <Box darkMode={darkMode}>
      <Space darkMode={darkMode}>
        <Bar>
          
          <FontAwesomeIcon icon={faGratipay} style={{fontSize: '50px'}} />
          <Circle>
          <FontAwesomeIcon icon={faShare} style={{fontSize: '30px'}}/>
          </Circle>
        </Bar>
      </Space>
      <Container darkMode={darkMode}>
        <h1 style={{ marginLeft: '20px' }}>{title}</h1>
        <Wrap  darkMode={darkMode}>
          <h2 style={{ marginLeft: '20px', marginRight: '20px', color: darkMode ? 'white' : 'black' }}>{username}</h2>
          <h3>{date}</h3>
        </Wrap>
        <img src={image} alt="Card Image" style={{ padding: '30px', width: '800px', height: '400px' }} />
        <p style={{ padding: '30px', width: '700px' }}>{content}</p>
      </Container>
    </Box>
  );
}

export default Full;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  width: 90vw;
  height: 20px;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Item = styled.div`
  width: 25%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
`;

const Login = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

const MoonIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Button = styled.button`
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

function Nav({ darkMode, handleDarkModeToggle }) {
  return (
    <>
      <Header darkMode={darkMode}>
        <Name>Velog</Name>
        <Item>
          <Button darkMode={darkMode} onClick={handleDarkModeToggle}>
            <MoonIcon darkMode={darkMode} icon={darkMode ? faSun : faMoon} />
          </Button>
          <FontAwesomeIcon icon={faSearch} />
          <Login darkMode={darkMode}>로그인</Login>
        </Item>
      </Header>
    </>
  );
}

export default Nav;
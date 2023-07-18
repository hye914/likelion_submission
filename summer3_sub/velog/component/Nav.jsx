import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  width: 90vw;
  height: 100px;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};
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
  background-color: black;
  color: white;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };

  
  return (
    <>
      <Header darkMode={darkMode}>
        <Name>Velog</Name>
        <Item>
          <Button onClick={handleButtonClick}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </Button>
          <FontAwesomeIcon icon={faSearch} />
          <Login>로그인</Login>
        </Item>
      </Header>
    </>
  );
}

export default Nav;

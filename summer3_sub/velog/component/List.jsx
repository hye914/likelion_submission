import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Preview from "./Preview"; 

const Header = styled.div`
  width: 90vw;
  height: 30px;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};
  display: flex;
  align-items: center;
  padding: 80px;
`;

const Box_1 = styled.div`
  width: 150px;
  height: 50px;
  font-size: 30px;
  margin-right: 20px;
  border-bottom: 2px solid ${(props) => (props.darkMode ? "white" : "black")};
`;

const Box = styled.div`
  width: 150px;
  height: 50px;
  font-size: 30px;
  margin-right: 20px;
  text-align: center;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

const ABox = styled.div`
  width: 150px;
  height: 50px;
  background-color: white;
  font-size: 25px;
  margin-right: 20px;
  border: 1px solid ${(props) => (props.darkMode ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

function List({ darkMode }) {
  return (
    <Header darkMode={darkMode}>
      <Box_1 darkMode={darkMode}>
        <FontAwesomeIcon icon={faChartLine} /> 트렌딩
      </Box_1>
      <Box darkMode={darkMode}>
        <FontAwesomeIcon icon={faClock} /> 최신
      </Box>
      
    </Header>
  );
}

export default List;

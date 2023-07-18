import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faClock, faSortDown } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  width: 90vw;
  height:50px;
  display: flex;
  color: white
  flex-direction: row;
  align-items: center;
  padding: 80px;
`;

const Box_1 =styled.div`
    width: 150px;
    height:50px;
    font-size:30px;
    margin-right:20px;
    border-bottom: 2px solid black;
`
const Box =styled.div`
    width: 150px;
    height:50px;
    font-size:30px;
    margin-right:20px;
    text-align: center;
`

const ABox =styled.div`
    width: 150px;
    height:50px;
    background-color: white;
    font-size:25px;
    margin-right:20px;
    border:1px solid gray;
    display:flex;
    align-items: center;
    justify-content: center;
`



function List() {
  return (
    <Header>
    
     <Box_1><FontAwesomeIcon icon={faChartLine} />   트렌딩</Box_1>
     <Box><FontAwesomeIcon icon={faClock} />   최신</Box>
     <ABox>이번 주<FontAwesomeIcon icon={faSortDown} /> </ABox>
    </Header>
  );
}


export default List;


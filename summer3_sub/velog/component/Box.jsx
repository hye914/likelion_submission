import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function Box(props) {
  return (
    <BoxContainer>
      <Image src={props.imageSrc} alt="Box Image" />
    </BoxContainer>
  );
}

export default Box;
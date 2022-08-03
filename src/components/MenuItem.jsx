import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  padding: 3px;
  padding-bottom: 5px;
  padding-left: 1.5em;
  /* background-color: gray; */

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  padding-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Text = styled.p`
  margin: 0px;
  padding: 0.4em;
`;

const TextTwo = styled.p`
  margin: 0px;
  padding: 0.4em;
  font-size: 12px;
`;

const MenuItem = ({ Icon, text, activeMenu }) => {
  if (activeMenu)
    return (
      <ContainerTwo>
        <Icon fontSize="medium" />
        <TextTwo>{text}</TextTwo>
      </ContainerTwo>
    );
  return (
    <Container>
      <Icon fontSize="medium" />
      <Text>{text}</Text>
    </Container>
  );
};

export default MenuItem;

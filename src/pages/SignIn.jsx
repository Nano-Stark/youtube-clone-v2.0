import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  border: 1px solid #919191;
  padding: 20px;
`;

const Title = styled.h2`
  margin: -2px;
  text-align: center;
`;

const SubTitle = styled.h4`
  margin: 5px 0px;
  text-align: center;
`;

const Input = styled.input`
  padding: 5px;
  margin: 5px;
  outline: none;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 5px 7px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const Info = styled.h6`
  margin: 0px;
  color: #919191;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to StarkTube</SubTitle>
        <Form>
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
          <Button type="submit">Sign In</Button>
        </Form>
        <SubTitle>or</SubTitle>
        <Form>
          <Input type="text" placeholder="username" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button type="submit">Sign up</Button>
        </Form>
      </Wrapper>
      <InfoContainer>
        <Info>English (USA)</Info>
        <Info>Help</Info>
        <Info>Privacy</Info>
        <Info>Terms</Info>
      </InfoContainer>
    </Container>
  );
};

export default SignIn;

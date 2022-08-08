import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.textSoft};
  padding: 20px;
`;

const Title = styled.h2`
  margin: -2px;
  text-align: center;
  color: ${({ theme }) => theme.textSoft};
`;

const SubTitle = styled.h4`
  margin: 5px 0px;
  text-align: center;
  color: ${({ theme }) => theme.textSoft};
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 5px 7px;
  background-color: ${({ theme }) => theme.textSoft};
  border: none;
  color: ${({ theme }) => theme.text};
`;

const Form = styled.div`
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
  color: ${({ theme }) => theme.textSoft};
`;

const SignIn = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
      // console.log(res.data);
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        name: username,
        password,
        email,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to StarkTube</SubTitle>
        <Form>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleSignin}>
            Sign In
          </Button>
        </Form>
        <SubTitle>or</SubTitle>
        <Form>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleSignup}>
            Sign up
          </Button>
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

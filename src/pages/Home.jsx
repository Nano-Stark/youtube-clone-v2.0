import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  flex: 8;
`;

const Wrapper = styled.div`
  padding: 20px;
  padding-right: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 25px;
  /* z-index: -999px; */
`;

const QuickItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.textSoft};
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  position: sticky;
  top: 65px;
  z-index: 999;
`;

const BubbleContainer = styled.div`
  overflow-x: scroll;
  width: ${(props) => (props.activeMenu === false ? "90vw" : "80vw")};
  padding: 1em;
  -ms-overflow-style: none;
  scrollbar-width: none;

  background-color: ${({ theme }) => theme.bg};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Bubble = styled.span`
  padding: 0.5em;
  padding-top: 0.2em;
  border: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 15px;
  margin: 0 0.5em;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.textSoft};
`;

const Home = ({ activeMenu }) => {
  const wrapperRef = useRef(null);
  // const [wrapperWidth, setWrapperWidth] = useState(0);

  // useLayoutEffect(() => {
  //   setWrapperWidth(wrapperRef.current.clientWidth);
  //   console.log(wrapperRef.current.clientWidth);
  // }, [wrapperRef.current.clientWidth]);

  // console.log(wrapperWidth);

  return (
    <Container>
      <QuickItem>
        <BubbleContainer activeMenu={activeMenu}>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
          <Bubble>Javascript</Bubble>
        </BubbleContainer>
      </QuickItem>

      <Wrapper ref={wrapperRef}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Wrapper>
    </Container>
  );
};

export default Home;

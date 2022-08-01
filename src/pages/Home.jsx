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
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  row-gap: 25px;
`;

const QuickItem = styled.div`
  border-top: 1px solid #919191;
  border-bottom: 1px solid #919191;
  position: sticky;
  top: 56px;
`;

const BubbleContainer = styled.div`
  overflow-x: scroll;
  width: ${(props) => (props.activeMenu === false ? "90vw" : "80vw")};
  padding: 1em;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Bubble = styled.span`
  padding: 0.5em;
  padding-top: 0.2em;
  border: 1px solid #919191;
  border-radius: 15px;
  margin: 0 0.5em;
  background-color: #f0f0f0;
`;

const Test = styled.div``;

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

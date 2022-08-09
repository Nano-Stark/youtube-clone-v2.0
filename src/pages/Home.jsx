import Axios from "../Axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  flex: 8;
  height: calc(100vh - 65px);
  overflow-y: scroll;
  overflow-x: hidden;
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
  top: 0;
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

const Home = ({ activeMenu, type }) => {
  const wrapperRef = useRef(null);

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await Axios.get(`/videos/${type}`);
        setVideos(res.data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
        console.log("error", err);
      }
    };
    fetchVideos();
  }, [type]);
  // console.log(videos);

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
        </BubbleContainer>
      </QuickItem>

      <Wrapper ref={wrapperRef}>
        {!error ? (
          videos.map((video) => <VideoCard key={video._id} video={video} />)
        ) : (
          <h1>401 Unauthorised Error</h1>
        )}
        {/* <VideoCard /> */}
      </Wrapper>
    </Container>
  );
};

export default Home;

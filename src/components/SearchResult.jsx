import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import VideoCard from "./VideoCard";
import { useLocation } from "react-router-dom";

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

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);
  return (
    <Container>
      <Wrapper>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Search;

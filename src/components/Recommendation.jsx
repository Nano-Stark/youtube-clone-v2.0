import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import styled from "styled-components";
import axios from "axios";

const Recommendations = styled.div`
  flex: 3;
`;

const Padding = styled.div`
  height: 100px;
  width: 100%;
`;

const Recommendation = ({ video, tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(
        res.data.splice(
          res.data.findIndex((_id) => _id === video._id),
          1
        )
      );
      //   setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Recommendations>
      {videos.map((video) => (
        <VideoCard key={video._id} recommendation={true} video={video} />
      ))}

      <Padding />
    </Recommendations>
  );
};

export default Recommendation;

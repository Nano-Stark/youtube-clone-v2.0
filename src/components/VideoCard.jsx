import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* background-color: ${(props) =>
    props.recommendation === true ? "blue" : "gray"}; */
  margin: 3px;
  z-index: 1;
  display: ${(props) => (props.recommendation === true ? "flex" : "")};
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: ${(props) =>
      props.recommendation === true ? "scale(1)" : "scale(1.1)"};
    cursor: pointer;
  }
  transition: 0.5s ease-out;
`;

const Video = styled.img`
  /* height: ${(props) => (props.recommendation === true ? "" : "")}; */
  width: ${(props) => (props.recommendation === true ? "160px" : "100%")};
  /* background-color: red; */
  object-fit: contain;
`;

const VideoInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  /* background-color: red; */
  width: 100%;
`;

const VideoImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) => (props.recommendation === true ? "none" : "block")};
`;

const VideoInfo = styled.div`
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InfoContainer = styled.div`
  /* flex: 1; */
`;

const InfoContainertwo = styled.div`
  margin-right: ${(props) => (props.recommendation === true ? "" : "10px")};
`;

const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 18px;
  padding: 2px;
  padding-top: 0px;
  margin-top: 0px;
`;

const VideoName = styled.p`
  margin: 0px;
  padding: 1.5px;
  font-size: 14px;
  font-weight: 400;
`;

const VideoMetaData = styled.p`
  margin: 0px;
  padding: 1.5px;
  font-size: 12px;
  font-weight: 400;
`;

const VideoCard = ({ recommendation, video }) => {
  const [channel, setChannel] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`/users/find/${video.userId}`);
        setChannel(res.data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <Container recommendation={recommendation}>
      <Video recommendation={recommendation} src={video.videoUrl} />
      <VideoInfoContainer>
        <VideoImage recommendation={recommendation} src={channel.img} />
        <VideoInfo>
          <InfoContainer>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoName>
              {channel.name}
              <CheckCircleIcon style={{ fontSize: "12px" }} />
            </VideoName>
            <VideoMetaData>
              {video.views}K views · {format(video.createdAt)}
            </VideoMetaData>
          </InfoContainer>
          <InfoContainertwo>
            <MoreVertOutlinedIcon />
          </InfoContainertwo>
        </VideoInfo>
      </VideoInfoContainer>
    </Container>
    </Link>
  );
};

export default VideoCard;
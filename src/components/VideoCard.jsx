import React from "react";
import styled from "styled-components";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Container = styled.div`
  background-color: ${(props) =>
    props.recommendation === true ? "blue" : "gray"};
  margin: 3px;
  display: ${(props) => (props.recommendation === true ? "flex" : "")};

  &:hover {
    transform: ${(props) =>
      props.recommendation === true ? "scale(1)" : "scale(1.2)"};
    cursor: pointer;
  }
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

const VideoCard = ({ recommendation }) => {
  return (
    <Container recommendation={recommendation}>
      <Video
        recommendation={recommendation}
        src="https://www.denofgeek.com/wp-content/uploads/2021/10/spider-man-no-way-home-tom-holland-doctor-strange-sony.jpg?fit=1200%2C680"
      />
      <VideoInfoContainer>
        <VideoImage recommendation={recommendation} />
        <VideoInfo>
          <InfoContainer>
            <VideoTitle>title</VideoTitle>
            <VideoName>
              Netflix <CheckCircleIcon style={{ fontSize: "12px" }} />
            </VideoName>
            <VideoMetaData>81K views · 3 days ago</VideoMetaData>
          </InfoContainer>
          <InfoContainertwo>
            <MoreVertOutlinedIcon />
          </InfoContainertwo>
        </VideoInfo>
      </VideoInfoContainer>
    </Container>
  );
};

export default VideoCard;

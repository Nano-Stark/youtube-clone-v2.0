import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VideoComment from "../components/VideoComment";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  flex: 8;
  display: flex;
  /* grid-template-columns: auto auto auto auto auto auto auto; */
  /* grid-template-columns: 400px auto; */
  padding: 30px 45px;
  column-gap: 20px;
  /* height: calc(100vh - 100px); */
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CurrentVideo = styled.div`
  /* grid-column-start: 1; */
  /* grid-column-end: 4; */
  flex: 6;
  background-color: red;
  height: 72vh;
`;

const Recommendation = styled.div`
  /* grid-column-start: 4; */
  /* grid-column-end: 8; */
  flex: 3;
  background-color: green;
`;

const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const VideoInfo = styled.div``;

const VideoTitle = styled.h2`
  margin: 0px;
  font-size: 22px;
  font-weight: 400;
  padding-top: 15px;
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #919191;
`;

const VideoMetaOne = styled.div``;

const VideoMetaTwo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Meta = styled.div`
  display: flex;
  gap: 3px;
  font-size: 16px;
  align-items: center;
`;

const VideoDescription = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;
`;

const VideoDesc = styled.div`
  width: 36em;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 70px;
  font-size: 14px;
`;

const Hr = styled.hr`
  border-bottom: 0.5px solid #919191;
`;

const VideoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const VideoText = styled.div`
  flex: 1;
`;

const POne = styled.p`
  margin: 0px;
`;

const PTwo = styled.p`
  margin: 0px;
  font-size: 12px;
`;

const VideoButton = styled.div`
  display: flex;
  gap: 20px;
`;
const VideoSubscribeButton = styled.button`
  padding: 10px 20px;
`;
const VideoJoinButton = styled.button`
  padding: 10px 20px;
`;

const Video = () => {
  return (
    <Container>
      <CurrentVideo>
        <VideoContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </VideoContainer>

        <VideoInfo>
          <VideoTitle>Javascript Matery Algorithm</VideoTitle>

          <VideoMeta>
            <VideoMetaOne>81K views · 3 days ago</VideoMetaOne>
            <VideoMetaTwo>
              <Meta>
                <ThumbUpAltOutlinedIcon style={{ fontSize: "18px" }} /> LIKE
              </Meta>
              <Meta>
                <ThumbDownAltOutlinedIcon style={{ fontSize: "18px" }} />{" "}
                DISLIKE
              </Meta>
              <Meta>
                <ReplyOutlinedIcon style={{ fontSize: "18px" }} /> SHARE
              </Meta>
              <Meta>
                <ShareOutlinedIcon style={{ fontSize: "18px" }} /> CLIP
              </Meta>
              <Meta>
                <ContentCutOutlinedIcon style={{ fontSize: "18px" }} /> SAVE
              </Meta>
              <Meta>
                <MoreHorizOutlinedIcon />
              </Meta>
            </VideoMetaTwo>
          </VideoMeta>
        </VideoInfo>

        <VideoDescription>
          <VideoImage />
          <VideoText>
            <POne>freecodeCamp</POne>
            <PTwo>6M subscribers</PTwo>
          </VideoText>
          <VideoButton>
            <VideoJoinButton>JOIN</VideoJoinButton>
            <VideoSubscribeButton>SUBSCRIBE</VideoSubscribeButton>
          </VideoButton>
        </VideoDescription>

        <VideoDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          neque ullamcorper, egestas dui imperdiet, faucibus dui. Nulla
          facilisi. Morbi blandit ligula erat, sit amet porta ex bibendum at.
          Curabitur a lacus sit amet elit lobortis tristique ac placerat odio.
        </VideoDesc>
        <Hr />

        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
        <VideoComment />
      </CurrentVideo>

      <Recommendation>
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
        <VideoCard recommendation={true} />
      </Recommendation>
    </Container>
  );
};

export default Video;

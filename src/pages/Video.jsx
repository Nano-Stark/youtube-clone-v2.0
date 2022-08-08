import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VideoComment from "../components/VideoComment";

import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
  dislike,
} from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";
import { format } from "timeago.js";
import axios from "axios";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Recommendation from "../components/Recommendation";
import CommentInput from "../components/CommentInput";

const Padding = styled.div`
  height: 100px;
  width: 100%;
`;

const Container = styled.div`
  flex: 8;
  display: flex;
  padding: 30px 45px;
  column-gap: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: ${({ theme }) => theme.text};
`;

const CurrentVideo = styled.div`
  flex: 6;
  height: 72vh;
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

const VideoMetaOne = styled.div`
  font-size: 14px;
`;

const VideoMetaTwo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const Meta = styled.div`
  display: flex;
  gap: 3px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
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
  border-radius: 50%;
  object-fit: cover;
`;

const VideoText = styled.div`
  flex: 1;
`;

const POne = styled.p`
  margin: 0px;
  font-weight: 800;
`;

const PTwo = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 500;
`;

const VideoButton = styled.div`
  display: flex;
  gap: 20px;
`;
const VideoSubscribeButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #cc0000;
  color: #f9f9f9;
  border-radius: 5px;
  font-weight: 600;
`;

const VideoJoinButton = styled.button`
  padding: 10px 20px;
  border: 0.5px solid blue;
  color: blue;
  border-radius: 5px;
  font-weight: 600;
  background-color: transparent;
  font-size: 14px; ;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const path = useLocation().pathname.split("/")[2];
  // const p = window.location;
  // console.log(path);
  // console.log(p);
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState({});
  const [comments, setComments] = useState([]);
  const [idle, setIdle] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        // console.log(videoRes);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.log(err);
        dispatch(fetchFailure());
      }
    };
    fetchData();
  }, [path, dispatch]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${currentVideo._id}`);
        setComments(res.data);
        // console.log(comments.sort((a, b) => a.createdAt - b.createdAt));
        // console.log(comments);
      } catch (err) {}
    };
    fetchComments();
  }, [currentVideo._id, idle]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedTo.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    // <Wrap>
    <Container>
      <CurrentVideo>
        <VideoContainer>
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe> */}
          <VideoFrame
            ref={videoRef}
            src={currentVideo.videoUrl}
            controls
            autoplay
          />
        </VideoContainer>

        <VideoInfo>
          <VideoTitle>{currentVideo.title}</VideoTitle>

          <VideoMeta>
            <VideoMetaOne>
              {currentVideo.views} views · {format(currentVideo?.createdAt)}
            </VideoMetaOne>
            <VideoMetaTwo>
              <Meta onClick={handleLike}>
                {currentVideo.likes?.includes(currentUser._id) ? (
                  <ThumbUpIcon style={{ fontSize: "18px", color: "red" }} />
                ) : (
                  <ThumbUpAltOutlinedIcon style={{ fontSize: "18px" }} />
                )}{" "}
                {currentVideo.likes?.length}
              </Meta>

              <Meta onClick={handleDislike}>
                {currentVideo.dislikes?.includes(currentUser._id) ? (
                  <ThumbDownIcon style={{ fontSize: "18px", color: "red" }} />
                ) : (
                  <ThumbDownAltOutlinedIcon style={{ fontSize: "18px" }} />
                )}{" "}
                {currentVideo.dislikes?.length}
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
          <VideoImage src={channel.img} />
          <VideoText>
            <POne>{channel.name}</POne>
            <PTwo>{channel.subscribers} subscribers</PTwo>
          </VideoText>
          <VideoButton>
            <VideoJoinButton>JOIN</VideoJoinButton>
            <VideoSubscribeButton onClick={handleSub}>
              {currentUser.subscribedTo?.includes(channel._id)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </VideoSubscribeButton>
          </VideoButton>
        </VideoDescription>

        <VideoDesc>{channel.desc}</VideoDesc>
        <Hr />

        <CommentInput placeholder="Enter comment" setIdle={setIdle} />

        {comments.map((comment) => (
          <VideoComment
            key={comment._id}
            comment={comment}
            user={currentUser}
          />
        ))}
        <Padding />
      </CurrentVideo>

      <Recommendation video={currentVideo} tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Comment = styled.div``;

const CommentHeader = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const CommentBody = styled.div`
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 13px;
`;

const VideoComment = ({ comment, user }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/users/find/${comment.userId}`);
        setChannel(res.data);
      } catch (err) {}
    };
    fetchComment();
  }, [comment.userId]);
  return (
    <Container>
      <Img src={channel.img} />
      <Comment>
        <CommentHeader>{channel.name}</CommentHeader>
        <CommentBody>{comment.desc}</CommentBody>
      </Comment>
    </Container>
  );
};

export default VideoComment;

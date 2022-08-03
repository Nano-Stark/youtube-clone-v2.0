import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
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

const VideoComment = () => {
  return (
    <Container>
      <Img src="https://www.denofgeek.com/wp-content/uploads/2021/10/spider-man-no-way-home-tom-holland-doctor-strange-sony.jpg?fit=1200%2C680" />
      <Comment>
        <CommentHeader>Franks laboratory</CommentHeader>
        <CommentBody>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          neque ullamcorper, egestas dui imperdiet,{" "}
        </CommentBody>
      </Comment>
    </Container>
  );
};

export default VideoComment;

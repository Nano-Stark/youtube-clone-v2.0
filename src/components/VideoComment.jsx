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
`;
const Comment = styled.div``;

const CommentHeader = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const CommentBody = styled.div`
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const VideoComment = () => {
  return (
    <Container>
      <Img />
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

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Axios from "../Axios";

const CommentInputter = styled.textarea`
  border: none;
  border-bottom: 0.5px solid grey;
  padding: 5px;
  outline: none;
  width: 95%;
  background-color: transparent;
  margin-bottom: 0.5em;
  /* overflow: hidden; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  resize: none;
  font-size: 16px;
`;

const Form = styled.form`
  width: 100%;
  position: relative;
`;

const VideoDescription = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: flex-start;
`;

const VideoImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  margin-right: 15px;
  margin-bottom: 5px;
  padding: 7px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 7px;
  background-color: #065fd4;
  cursor: pointer;
  color: ${({ theme }) => theme.bg};
`;

const CommentInput = ({ setIdle }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdle((prev) => !prev);
    const postComment = async () => {
      await Axios.post("/comments", {
        userId: currentUser._id,
        videoId: currentVideo._id,
        desc: comment,
      });
      await setComment("");
    };
    postComment();
    // console.log({
    //   userId: currentUser._id,
    //   videoId: currentVideo._id,
    //   desc: comment,
    // });

    // console.log(comment);
  };

  return (
    <VideoDescription>
      <VideoImage src={currentUser.img} />
      <Form>
        <CommentInputter
          placeholder="Enter comment"
          rows={4}
          onChange={(e) => setComment(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            COMMENT
          </Button>
        </ButtonContainer>
      </Form>
    </VideoDescription>
  );
};

export default CommentInput;

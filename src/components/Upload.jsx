import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import Axios from "../Axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000a7;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  gap: 10px;
  position: relative;
`;

const Close = styled.h2`
  align-self: flex-end;
  margin: 0;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  border: 0.5px solid ${({ theme }) => theme.bg};
  padding: 10px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 5px;
  outline: none;
  :hover {
    outline: 1px solid ${({ theme }) => theme.text};
  }
`;

const Desc = styled.textarea`
  color: ${({ theme }) => theme.text};
  border: 0.5px solid ${({ theme }) => theme.bg};
  padding: 10px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 5px;
  :hover {
    outline: 1px solid ${({ theme }) => theme.text};
  }
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;

  :hover {
    transform: scale(0.98);
    color: ${({ theme }) => theme.text};
  }
`;
const Label = styled.label`
  font-size: 14px;
`;

const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFile = (file, urlType) => {
    const fileName = new Date().getTime() + file.name;
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        urlType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log("firebase upload error" + error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //   console.log("File available at", downloadURL);
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log({ ...inputs, tags });
    const res = await Axios.post("/videos", { ...inputs, tags });
    setOpen(false);
    res.status === 200 && navigate(`/video/${res.data._id}`);
  };
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>

        <Title>Upload a new Video</Title>
        <Label>Video: </Label>
        {videoPerc > 0 ? (
          "Uploading: " + videoPerc
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <Desc
          placeholder="Description"
          rows={8}
          name="desc"
          onChange={(e) => handleChange(e)}
        />
        {imgPerc > 0 ? (
          "Uploading: " + imgPerc
        ) : (
          <Input
            type="text"
            placeholder="Separate tags with commas"
            onChange={(e) => handleTags(e)}
          />
        )}
        <Label>Image: </Label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <Button onClick={(e) => handleUpload(e)}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;

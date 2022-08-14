import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Axios from "../Axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  width: 45vw;
  height: 2.5em;
  z-index: 999;
`;

const Input = styled.input`
  flex: 1;
  /* height: 90%; */
  outline: none;
  border: none;
  border-right: 1px solid gray;
  padding: 7px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const IconWrapper = styled(IconButton)`
  background-color: ${({ theme }) => theme.bg} !important;
  color: ${({ theme }) => theme.text} !important;
  /* display: grid;
  place-items: center; */
`;

const Search = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <InputWrapper>
        <Input placeholder="Search" onChange={(e) => setQ(e.target.value)} />
        <IconWrapper
          sx={{ borderRadius: 0 }}
          onClick={() => {
            navigate(`/search?q=${q}`);
          }}
        >
          <SearchIcon
            style={
              {
                // paddingLeft: "0.5em",
                // paddingRight: "0.5em",
                // backgroundColor: "#F0F0F0",
                // height: "100%",
              }
            }
          />
        </IconWrapper>
      </InputWrapper>

      <IconWrapper>
        <MicIcon
          style={
            {
              // borderRadius: "50%",
              // backgroundColor: "#181818",
              // padding: "0.1em",
            }
          }
        />
      </IconWrapper>
    </Container>
  );
};

export default Search;

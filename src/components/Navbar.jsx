import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import LogoImage from "../utils/Youtube-logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  padding-bottom: 2px;
  position: sticky;
  top: 0px;
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5em;
  padding-left: 1em;
`;

const Logotwo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1em;
  padding: 0.1em;
  font-weight: 900;
  font-size: 20px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
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

const Image = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 2em;
  margin-left: 1.2em;
  border-radius: 50%;
  object-fit: cover;
`;

const ImageLogo = styled.img`
  height: 36px;
  width: 36px;
  /* margin-right: 2em; */
  /* margin-left: 1.2em; */
  /* border-radius: 50%; */
  object-fit: cover;
`;

const IconWrapper = styled(IconButton)`
  background-color: ${({ theme }) => theme.bg} !important;
  color: ${({ theme }) => theme.text} !important;
  /* display: grid;
  place-items: center; */
`;

const SignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  border: 0.5px solid blue;
  color: blue;
  padding: 7px;
  margin-right: 3em;
  /* text-decoration-line: none; */
`;

const Navbar = ({ activeMenu, setActiveMenu }) => {
  const signin = false;
  return (
    <Container>
      <Logo>
        <IconWrapper onClick={() => setActiveMenu(!activeMenu)} sx={{}}>
          <MenuIcon />
        </IconWrapper>
        <Logotwo>
          <ImageLogo src={LogoImage} />
          StarkTube
        </Logotwo>
      </Logo>
      <Search>
        <InputWrapper>
          <Input placeholder="Search" />
          <IconWrapper sx={{ borderRadius: 0 }}>
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
      </Search>
      {signin ? (
        <Info>
          <VideoCallOutlinedIcon />
          <NotificationsNoneIcon fontSize="medium" />
          <Image src="https://www.denofgeek.com/wp-content/uploads/2021/10/spider-man-no-way-home-tom-holland-doctor-strange-sony.jpg?fit=1200%2C680" />
        </Info>
      ) : (
        <Info>
          <Link to="/signin" style={{ textDecorationLine: "none" }}>
            <SignInButton>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </SignInButton>
          </Link>
        </Info>
      )}
    </Container>
  );
};

export default Navbar;

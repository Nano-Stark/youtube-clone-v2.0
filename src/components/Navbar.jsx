import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { IconButton } from "@mui/material";

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

const IconWrapper = styled(IconButton)`
  background-color: ${({ theme }) => theme.bg} !important;
  color: ${({ theme }) => theme.text} !important;
  /* display: grid;
  place-items: center; */
`;

// const Hr = styled.hr`
//   margin-left: calc(1em + 7px + 2.5em);
// `;

const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <Container>
      <Logo>
        <IconWrapper onClick={() => setActiveMenu(!activeMenu)} sx={{}}>
          <MenuIcon />
        </IconWrapper>
        Logo
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
      <Info>
        <VideoCallOutlinedIcon />
        <NotificationsNoneIcon fontSize="medium" />
        <Image src="https://www.denofgeek.com/wp-content/uploads/2021/10/spider-man-no-way-home-tom-holland-doctor-strange-sony.jpg?fit=1200%2C680" />
      </Info>
    </Container>
  );
};

export default Navbar;

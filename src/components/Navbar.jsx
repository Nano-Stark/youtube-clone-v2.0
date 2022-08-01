import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { IconButton } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  padding-bottom: 2px;
  position: sticky;
  top: 0px;
  height: 56px;
  background-color: #f0f0f0;
  z-index: 50;
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
`;

const Input = styled.input`
  flex: 1;
  /* height: 90%; */
  outline: none;
  border: none;
  border-right: 1px solid gray;
  padding: 7px;
`;

const Image = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 2em;
  margin-left: 1.2em;
`;

// const Hr = styled.hr`
//   margin-left: calc(1em + 7px + 2.5em);
// `;

const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <>
      <Container>
        <Logo>
          <IconButton onClick={() => setActiveMenu(!activeMenu)}>
            <MenuIcon />
          </IconButton>
          Logo
        </Logo>
        <Search>
          <InputWrapper>
            <Input placeholder="Search" />
            <SearchIcon
              style={{
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                backgroundColor: "#F0F0F0",
                height: "100%",
              }}
            />
          </InputWrapper>
          <MicIcon
            style={{
              borderRadius: "50%",
              backgroundColor: "#F0F0F0",
              padding: "0.3em",
            }}
          />
        </Search>
        <Info>
          <VideoCallOutlinedIcon />
          <NotificationsNoneIcon fontSize="medium" />
          <Image />
        </Info>
      </Container>
      {/* <Hr /> */}
    </>
  );
};

export default Navbar;

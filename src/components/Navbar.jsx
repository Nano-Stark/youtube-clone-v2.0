import MenuIcon from "@mui/icons-material/Menu";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import LogoImage from "../utils/Youtube-logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

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
  margin-right: 1em;
  margin-left: 1.2em;
  border-radius: 50%;
  object-fit: cover;
`;

const Div = styled.div`
  margin-right: 1em;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  cursor: pointer;
  :hover {
    transform: scale(1.09);
  }
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
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (currentUser !== null) {
      // await axios.post("/auth/logout", {});
    }
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    navigate("/");
  }, [currentUser]);

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
      <Search />
      {currentUser ? (
        <Info>
          <VideoCallOutlinedIcon
            onClick={() => {
              return setOpen(true);
            }}
          />
          <NotificationsNoneIcon fontSize="medium" />
          <Image src={currentUser.img} />
          <Div onClick={handleLogout}>
            <LogoutIcon style={{ color: "#FF0000" }} />
          </Div>
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

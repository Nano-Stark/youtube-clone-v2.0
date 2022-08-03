import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuItem from "./MenuItem";
import { useState } from "react";

const Container = styled.div`
  flex: 1.75;
  height: calc(100vh - 65px);
  position: sticky;
  top: 65px;
  overflow-y: scroll;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #555;
    box-shadow: inset 5px 5px 10px #c6c6c6;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textSoft};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.bg};
  }
`;

const Hr = styled.hr`
  margin-bottom: -1px;
  /* border: 0.1px solid ${({ theme }) => theme.textSoft}; */
`;

const Text = styled.p`
  margin: 0px;
  padding: 0.4em;
  padding-left: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.textSoft};
  text-transform: uppercase;
`;

const Textwo = styled.p`
  margin: 0px;
  padding: 0.4em;
  padding-left: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  bottom: 0;
`;

const ContainerTwo = styled.div`
  flex: 0.5;
  height: calc(100vh - 65px);
  position: sticky;
  top: 65px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Menu = ({ activeMenu, pathname, darkMode, setDarkMode }) => {
  if (!activeMenu && pathname === "/video") return;
  if (!activeMenu)
    return (
      <ContainerTwo>
        <MenuItem Icon={HomeIcon} text="Home" activeMenu />
        <MenuItem Icon={ExploreOutlinedIcon} text="Explore" activeMenu />
        <MenuItem Icon={LocalPlayOutlinedIcon} text="Shorts" activeMenu />
        <MenuItem
          Icon={SubscriptionsOutlinedIcon}
          text="Subscription"
          activeMenu
        />
        <MenuItem Icon={VideoLibraryOutlinedIcon} text="Library" activeMenu />
        <Textwo
          onClick={() => setDarkMode(!darkMode)}
          style={{
            paddingTop: "1em",
            paddingBottom: "1em",
            display: "grid",
            placeItem: "center",
          }}
        >
          {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
        </Textwo>
      </ContainerTwo>
    );

  return (
    <Container>
      <MenuItem Icon={HomeIcon} text="Home" />
      <MenuItem Icon={ExploreOutlinedIcon} text="Explore" />
      <MenuItem Icon={LocalPlayOutlinedIcon} text="Shorts" />
      <MenuItem Icon={SubscriptionsOutlinedIcon} text="Subscription" />
      <Hr />
      <MenuItem Icon={VideoLibraryOutlinedIcon} text="Library" />
      <MenuItem Icon={HistoryOutlinedIcon} text="History" />
      <MenuItem Icon={WatchLaterOutlinedIcon} text="Watch Later" />
      <MenuItem Icon={ThumbUpAltOutlinedIcon} text="Liked videos" />

      <Hr />
      <Text>Subscriptions</Text>
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />

      <Hr />
      <Text>Explore</Text>
      <MenuItem Icon={SportsEsportsOutlinedIcon} text="Gaming" />
      <MenuItem Icon={EmojiEventsOutlinedIcon} text="Sports" />

      <Hr />
      <Text>More from Youtube</Text>
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />

      <Hr />
      <MenuItem Icon={SettingsOutlinedIcon} text="Settings" />
      <MenuItem Icon={FlagOutlinedIcon} text="Report history" />
      <MenuItem Icon={HelpOutlineOutlinedIcon} text="Help" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <Hr />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />
      <MenuItem Icon={FeedbackOutlinedIcon} text="Send feedback" />

      <Textwo onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Textwo>
    </Container>
  );
};

export default Menu;

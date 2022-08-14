import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import SearchResult from "./components/SearchResult";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: ${({ theme }) => theme.bg};

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // pathname for hiding menu when its on the path /video
  const pathname = window.location.pathname;
  // console.log(window.location.pathname);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Wrapper>
          <Menu
            activeMenu={activeMenu}
            pathname={pathname}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Routes>
            <Route
              path="/"
              index
              element={<Home type="random" activeMenu={activeMenu} />}
            />
            <Route
              path="/trend"
              element={<Home type="trend" activeMenu={activeMenu} />}
            />
            <Route
              path="/subscriptions"
              element={<Home type="subscriptions" activeMenu={activeMenu} />}
            />
            <Route
              path="/video/:videoId"
              element={<Video activeMenu={activeMenu} />}
            />
            <Route
              path="/signin"
              element={<SignIn activeMenu={activeMenu} />}
            />
            <Route
              path="/search"
              element={<SearchResult activeMenu={activeMenu} />}
            />
          </Routes>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

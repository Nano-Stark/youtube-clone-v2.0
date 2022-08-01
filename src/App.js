import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  // pathname for hiding menu when its on the path /video
  const pathname = window.location.pathname;
  console.log(window.location.pathname);
  return (
    // <ThemeProvider>
    <Container>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Wrapper>
        <Menu activeMenu={activeMenu} pathname={pathname} />
        <Routes>
          <Route path="/" index element={<Home activeMenu={activeMenu} />} />
          <Route path="/video" element={<Video activeMenu={activeMenu} />} />
          <Route path="/signin" element={<SignIn activeMenu={activeMenu} />} />
        </Routes>
      </Wrapper>
    </Container>
    // </ThemeProvider>
  );
}

export default App;

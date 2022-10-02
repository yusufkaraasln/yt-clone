import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
function App() {
  const Container = styled.div`
    display: flex;
  `;
  const Main = styled.div`
    flex: 7;
  `;
  const Wrapper = styled.div``;

  return (
    <Container>
      <Router>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home type="random" />} />
                <Route path="trends" element={<Home  type="trend"/>} />
                <Route path="subscriptions" element={<Home type="sub" />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
                <Route path="sign" element={<Sign/>}/>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Router>
    </Container>
  );
}

export default App;

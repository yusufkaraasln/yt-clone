import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
function Home({type}) {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 100px;
    background: #000;
    height: 100vh;
  `;


  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get("/videos/"+type);
        setVideos(data);
      } catch (error) {}
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card size="lg" video={video} key={video._id} />
      ))}
    </Container>
  );
}

export default Home;

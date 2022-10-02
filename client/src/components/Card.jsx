import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {format } from "timeago.js";

function Card({ size , video }) {
  const [channel, setChannel] = React.useState([]);
  React.useEffect(() => {
    const fetchChannel = async () => {
      try {
        const { data } = await axios.get("/users/find/"+video.userId);
        setChannel(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel();
  }, [video.userId]);


  const Container = styled.div`
    width: 400px;
    margin-bottom: ${(props) => (props.size === "lg" ? "10rem" : ".5rem")};
    display: flex;
    flex-direction: ${(props) => (props.size === "lg" ? "column" : "row")};
  `;
  const Img = styled.img`
    width: ${(props) => (props.size === "sm" ? "350px" : "400px")};
    height: ${(props) => (props.size === "lg" ? "220px" : "100px")};

    background: #bbbbbb;
  `;
  const Details = styled.div`
    margin-top: ${(props) => (props.size === "sm" ? "0" : "20px")};

    display: flex;
    gap: 10px;
  `;
  const Profile = styled.img`
    width: 50px;
    height: 40px;
    display: ${(props) => (props.size === "sm" ? "none" : "block")};
    border-radius: 50%;
    background: #bbbbbb;
  `;
  const Detail = styled.div`
    display: flex;
    margin-left: ${(props) => (props.size === "sm" ? "20px" : "0")};

    flex-direction: column;
    gap: ${(props) => (props.size === "sm" ? "0" : "5px")};
  `;
  const Title = styled.span`
    font-size: ${(props) => (props.size === "lg" ? "20px" : "14px")};
    text-overflow: ellipsis;
    overflow: hidden;

    color: #fff;
    font-weight: 500;
  `;
  const Channel = styled.span`

    font-size: ${(props) => (props.size === "lg" ? "15px" : "12px")};
    color: #9c9c9c;
    font-weight: bold;
  `;
  const Views = styled.span`
    font-size: ${(props) => (props.size === "lg" ? "15px" : "12px")};
    color: #bbbbbb;
    font-weight: 500;
  `;

  return (
    <Link to={`/video/test`}>
      <Container size={size}>
        <Img src={video.imgUrl} size={size} />
        <Details size={size}>
          <Profile src={channel.img}  size={size} />
          <Detail size={size}>
            <Title size={size}>{video.title}</Title>
            <Channel size={size}>{channel.name}</Channel>
            <Views size={size}>
              {video.views} görüntülenme <strong>·</strong> {format(video.createdAt)}
            </Views>
          </Detail>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;

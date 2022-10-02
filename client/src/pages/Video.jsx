import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faUser,
  faThumbsUp,
  faThumbsDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../components/Comments";
import Card from "../components/Card";
function Video() {
  const Container = styled.div`
    display: flex;
    padding: 30px 100px;
    background: #000;
    gap: 20px;
    color: #fff;
  `;
  const Main = styled.div`
    flex: 3;
  `;
  const Side = styled.div`
    flex: 1;
   
  `;
  const Video = styled.div`
    width: 100%;
    height: 550px;
    background: #cccccc;
  `;
  const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;

  `;
  const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;


  `;
  const Views = styled.div`
    font-size: 15px;
    color: #9c9c9c;

  `;
  const Buttons = styled.div`
    display: flex;
    gap: 20px;

  `;
  const Icon = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    font-size: 15px;
    color: #9c9c9c;
    transition: all 0.2s ease;
    &:hover {
        color: #fff;
    }

  `;
  const Description = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    
  `;
  const Profile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #cccccc;
    margin-right: 10px;

  `;
  const Detail = styled.div`
     
    color: #9c9c9c;

  `;
    const Channel = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 600;

  `;
  const Subscribers = styled.div`
    margin-top: 3px;
    font-size: 13px;
  `;
  const Desc = styled.div`
    margin-top: 6px;
  `;
  const Button = styled.div`
    margin-left: auto;
    margin-right: 3rem;
    background-color: #ff3131;
    padding: 10px 20px;
    border-radius: 3px;
  `;

const Hr = styled.hr`
    margin: 20px 0;
    border: .1px solid #161616;
    `;
    
  return (
    <Container>
      <Main>
        <Video/>
        <Title>Ne güzel bir video böyle loo</Title>
        <Details>
          <Views>143.466 Görüntülenme - 1 gün önce </Views>
          <Buttons>
            <Icon>
              <FontAwesomeIcon icon={faThumbsUp} /> 123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faThumbsDown} /> Beğenme
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faShare} /> Paylaş
            </Icon>
          </Buttons>
        </Details>
        <Hr/>
        <Description>
          <Profile />
          <Detail>
            <Channel>Karaaslan</Channel>
            <Subscribers>123B abone</Subscribers>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.consecteturconsecteturconsecteturconsecteturconsectetur
            </Desc>
          </Detail>
          <Button>Abone Ol</Button>
        </Description>
        <Comments/>

      </Main>
      <Side>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
        <Card size="sm"/>
      </Side>
    </Container>
  );
}

export default Video;

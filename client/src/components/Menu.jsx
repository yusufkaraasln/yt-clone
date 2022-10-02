import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Menu() {
  const Container = styled.div`
    flex: 1;
    background: #202020;
    height: 100vh;
    color: #fff;
    position: sticky;
    top: 0;
  `;
  const Wrapper = styled.div`
    padding: 15px 30px;
  `;
  const Logo = styled.div`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 25px;
  `;
  const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px 0;
  `;
  const Hr = styled.hr`
    margin: 20px 0;
    border: 0.5px solid #373737;
  `;
  const Login = styled.div``;
  const Button = styled.button`
    padding: 5px 10px;
    background: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 10px;
  `;

  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <Link to="/">
          <Item>
            <FontAwesomeIcon icon={faHome} />
            Anasayfa
          </Item>
        </Link>
        <Link to="/trends">
        <Item>
          <FontAwesomeIcon icon={faHome} />
          Kefşet
        </Item>
        </Link>
        <Link to="/subscriptions">
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Abonelikler
        </Item>
        </Link>
        <Hr></Hr>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Kitaplık
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Geçmiş
        </Item>
        <Hr />
        <Login>
          Giriş yap ve videoları beğen, yorum yap ve abone ol!
          <Link to="sign">

          <Button>
            <FontAwesomeIcon
              style={{
                marginRight: "5px",
              }}
              icon={faUser}
            />
            Giriş Yap
          </Button>
          
          </Link>
        </Login>

        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Müzik
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Spor
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Oyunlar
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Filmler
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Haberler
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Canlı
        </Item>
        <Hr></Hr>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Ayarlar
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Bildir
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Yardım
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCompass} />
          Aydınlık Tema
        </Item>
      </Wrapper>
    </Container>
  );
}

export default Menu;

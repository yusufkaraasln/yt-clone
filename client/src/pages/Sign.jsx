import React from "react";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  background: #000;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const Sing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  border: 2px solid #3b3b3b;
  background: #1d1d1d;
  padding: 3rem;
`;
const Title = styled.span`
  font-size: 30px;
`;
const Desc = styled.span`
  font-size: 20px;
`;

const Button = styled.button`
  padding: 5px 20px;
  background: #585858;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 7px;
  border: 2px solid #3b3b3b;
`;
function Sign() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {


    try {
      const { data } = await axios.post("/auth/signin", {
        name,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <Container>
      <Sing>
        <Title>Oturum Aç</Title>
        <Desc>ve RocketTube'ye ak...</Desc>
        <Input
          placeholder="E-Posta"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button onClick={handleLogin}>Giriş Yap</Button>
        <Title>Veya</Title>
        <Input
          placeholder="Kullanıcı Adı"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-Posta"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Şifre"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Kayıt Ol</Button>
      </Sing>
    </Container>
  );
}

export default Sign;

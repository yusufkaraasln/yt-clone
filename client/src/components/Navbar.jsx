import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: #242526;
    height: 60px;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    position: relative;
    padding: 0px 20px;
  `;
  const Search = styled.div`
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #3b3b3b;
    border-radius: 5px;
    padding: 5px 10px;

  `;
  const Input = styled.input`
    width: 100%;
    padding: 5px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    
`;
  const Button = styled.button`
    padding: 5px 10px;
    background: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
  `;

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search for something" />
          <FontAwesomeIcon icon={faSearch}
            color="#fff"
          />
        </Search>
        <Button>
          <FontAwesomeIcon  style={{marginRight: "5px"}} icon={faUser} />
          Giriş Yap
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

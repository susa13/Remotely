import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../styles/logo.jpg";

import Home from "../pages/Home.js";

const MainDiv = styled.div`
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 42px;

  .link {
    text-decoration: none;
    color: black;
  }
  .mid_btn {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  .logo {
    height: 40px;
  }
`;
const CompanyName = styled.h1`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  text-decoration: none;
`;
const MiddleBtnDiv = styled.div`
  .mid_btn {
    padding: 10px;
  }
`;
const PostBtnDiv = styled.div`
  margin: auto;

  text {
    font-size: 20px;
    font-weight: bold;
    color: #ff5a5f;
    letter-spacing: 1.21px; 
  }

`;

const OrangeBorder = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 60px;
  border: 2px solid #ff5a5f;
  border-radius: 20px;
`
const NavBar = () => {
  return (
    <MainDiv>
      <Link to="/" className="link">
        <LogoDiv>
          <div>
            <img src={Logo} alt="logo"></img>
          </div>
          <CompanyName>Remotely</CompanyName>
        </LogoDiv>
      </Link>
      <MiddleBtnDiv>
        <Link className="mid_btn" to="/about">
          About Us
        </Link>
        <Link className="mid_btn" to="/contact">
          Contact Us
        </Link>
      </MiddleBtnDiv>
      <OrangeBorder>
        <PostBtnDiv>
          <Link to="/post" className="link">
            <text>Post Job</text>
          </Link>
        </PostBtnDiv>
      </OrangeBorder>
    </MainDiv>
  );
};

export default NavBar;

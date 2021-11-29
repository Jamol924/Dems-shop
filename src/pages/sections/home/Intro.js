import React,{useState} from "react";
import AboutSection from "../../../components/AboutSection";
import Nav from "../../../components/Nav";
import back from "../../../assets/background.jpg";
import styled from "styled-components";
import MinNav from "../../../components/common/MineNavbar/MinNav";

const Intro = () => {
  
  return (
    <Wrapper >
      <Nav />
      <MinNav />
      <AboutSection />
    </Wrapper >
  );
};


const Wrapper = styled.div`
  position: relative;
  height: 585px;
  background: linear-gradient(  rgba(14, 13, 13, 0.26), rgba(79, 87, 153, 0.363)),  url(${back}) no-repeat center center/cover;
  padding-top: 200px;
  @media(max-width:700px){
    display: none;
  } 
`;

export default Intro;

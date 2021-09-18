import React from "react";
// Page Components
import AboutSection from "../../../components/AboutSection";
import CategorySection from "../../../components/CategorySection";
import Nav from "../../../components/Nav";
import back from "../../../assets/background.jpg";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <CategorySection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 40px 0;
  padding-bottom: 80px;
  background: #fff;
`;

export default AboutUs;

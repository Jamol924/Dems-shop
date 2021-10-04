import React from "react";
import CategorySection from "../../../components/CategorySection";
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

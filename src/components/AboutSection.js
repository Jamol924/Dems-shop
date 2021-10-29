import React,{useState} from "react";
import {
  Wrapper,
  WrapperMenu,
  WrapperTitle,
  TitleH1,
  TitleP,
} from "../components/common/MaterialComponent/AboutSection";
import Search from "./Search";
const AboutSection = () => {
  return (
    <Wrapper>
      <WrapperMenu>
        <WrapperTitle>
          <TitleH1>
            Buy, Sell, Rent & Exchange in one Click
            {/* Покупка, продажа, аренда и обмен в один клик */}
            {/* Bir marta bosish bilan sotib oling, soting, ijaraga oling va almashing */}
          </TitleH1>
          <TitleP>
            Search from over 2000+ Active Ads in 29+ Categories for Free
          </TitleP>
        </WrapperTitle>
       <Search  />
      </WrapperMenu>
    </Wrapper>
  );
};

export default AboutSection;

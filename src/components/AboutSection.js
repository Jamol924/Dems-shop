import React from "react";
import Search from "./Search";
import {
  Wrapper,
  WrapperMenu,
  WrapperTitle,
  TitleH1,
  TitleP,
} from "../components/common/MaterialComponent/AboutSection";
import { useSelector } from "react-redux";
import L from "../locale/language.json"

const AboutSection = () => {

  const lan = useSelector(state => state.allLanguage)  
  return (
    <Wrapper>
      <WrapperMenu>
        <WrapperTitle>
          <TitleH1>
            {L.asia.title[lan]}
          </TitleH1>
          <TitleP>
          {L.asia.text[lan]}
          </TitleP>
        </WrapperTitle>
       <Search  />
      </WrapperMenu>
    </Wrapper>
  );
};

export default AboutSection;

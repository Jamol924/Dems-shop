import React from "react";
import styled from "styled-components";
import AgricultureFeater from "./FeaterBob/AgricultureFeater";
import BolalatFeater from "./FeaterBob/Bolalarfeater";
import BusinesFeater from "./FeaterBob/BusinesFeater";
import CarsFeater from "./FeaterBob/CarsFeater";
import ElictronicFeater from "./FeaterBob/ElictronicFeater";
import FashionFeater from "./FeaterBob/FashionFeater";
import HomeFeater from "./FeaterBob/HomeFeater";
import JobsFeater from "./FeaterBob/JobsFeater";
let item = 1;
const Features = ({ dataFeatures }) => {
  {
    switch (dataFeatures.type) {
      case "cars":
        item = 2;
        break;
      case "home":
        item = 3;
        break;
      case "electronics":
        item = 4;
        break;
      case "jobs":
        item = 5;
        break;
      case "fashion-style":
        item = 6;
        break;
      case "childrens-world":
        item = 7;
        break;
      case "business-service":
        item = 8;
        break;
      case "agriculture":
        item = 9;
        break;
    }
  }
  return (
    <>
      {item === 2 && (
          <CarsFeater dataCard = {dataFeatures} />
        )}
      {item === 3 && (
          <HomeFeater dataCard = {dataFeatures} />
        )}
      {item === 4 && (
          <ElictronicFeater dataCard = {dataFeatures} />
        )}
      {item === 5 && (
          <JobsFeater dataCard = {dataFeatures} />
        )}
      {item === 6 && (
          <FashionFeater dataCard = {dataFeatures} />
        )}
      {item === 7 && (
          <BolalatFeater dataCard = {dataFeatures} />
        )}
      {item === 8 && (
          <BusinesFeater dataCard = {dataFeatures} />
        )}
      {item === 9 && (
          <AgricultureFeater dataCard = {dataFeatures} />
        )}
    </>
  );
};

export const Wrapper = styled.div`
  margin-bottom: 50px;
  background: white;
  padding-top: 29px;
  display: flex;
  flex-direction: column;
  div.title {
    display: flex;
    flex-direction: column;
    padding: 0px 26px;
  }
  div.items {
    display: flex;
  }
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: #6c6c6c;
    font-family: "Inter", sans-serif;
  }

  div.line {
    width: 40px;
    height: 5px;
    background: #f85c70;
    margin: 20px 0;
  }
`;

export const PStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 13px;
    line-height: 15px;
    font-weight: 800px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
  }
`;

export default Features;

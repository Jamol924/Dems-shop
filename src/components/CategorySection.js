import React from "react";
import CategoryItem from ".//common/CategoryItem";
import styled from "styled-components";
import datas from "../pages/sections/Admen/Categore/dataCategore";
import l from "../locale/language.json";
import { useSelector } from "react-redux";

const CategorySection = () => {
  const lan = useSelector((state) => state.allLanguage);
  return (
    <>
      <Wrapper>
        <StyledHeading>
          <h2>{l.popcat[lan]}</h2>
        </StyledHeading>
        <CategoryList>
          {datas.map((item) => (
            <CategoryItem
              id={item.id}
              color={item.color}
              img={item.img}
              title={item.title[lan]}
            />
          ))}
        </CategoryList>
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 80px;
  @media(max-width:700px){
    margin-top: 100px;
  }
  
  @media(max-width:350px){
    margin-bottom: 0px;
  }
  
`;

export const CategoryList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-left: 0 auto;
  font-size: 15px;
  line-height: 19px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  margin: 0 auto;
  padding-top: 40px;
  @media (max-width: 550px) {
    padding-top: 0px;
    line-height: 10px;
  }
`;

export const StyledHeading = styled.div`
margin-bottom: -30px;
margin-top: -100px;
  h2 {
    padding-top: 70px;
    font-style: normal;
    font-size: 30px;
    line-height: 37px;
    font-weight: bold;
    font-family: "Quicksand", sans-serif;
    color: #2a2a2a;
    text-align: center;
  }
  @media (max-width: 550px) {
    text-align: start;
    h2 {
      padding-top: 10px;
      font-size: 30px;
      line-height: 37px;
      padding-bottom: 20px;
    }
  }
  @media (max-width: 350px) {
    h2 {
      font-size: 20px;
      line-height: 12px;
      padding-bottom: 30px;
    }
  }
`;

export default CategorySection;

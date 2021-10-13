  import React from "react";
  import CategoryItem from ".//common/CategoryItem";
  import styled from "styled-components";
  import datas from "../pages/sections/Admen/Categore/dataCategore";

  const CategorySection = () => {
   

    return (
      <Wrapper>
        <StyledHeading>
          <h2>Popular Categories</h2>
        </StyledHeading>
        <CategoryList>
          {datas.map((item) => (
            <CategoryItem id={item.id}  img={item.img} title={item.title} />
          ))}
          <CategoryList>
          </CategoryList>
        </CategoryList>
      </Wrapper>
    );
  };

  export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CategoryList = styled.div`
    width: 100%;
    height:auto;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: stretch;
    margin-left: 0 auto;
    font-size: 15px;
    line-height: 19px;
    font-weight: bold;
    font-family: "Quicksand", sans-serif;
    margin: 0 auto;
    padding-top: 40px;
  `;

  const StyledHeading = styled.div`
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
  `;

  export default CategorySection;

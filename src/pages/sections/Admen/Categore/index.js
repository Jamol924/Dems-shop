import React from "react";
import datas from "./dataCategore";
import { Link } from "react-router-dom";
import {
  CategoryList,
  StyledHeading,
  Wrapper,
} from "../../../../components/CategorySection";
import { StyledCategoryItem, StyledImg, StyledTitle } from "../../../../components/common/CategoryItem";

function Categore() {
  return (
    <div>
      <Wrapper>
        <StyledHeading style={{marginBottom:"-30px", marginTop:"-100px"}}>
          <h2>Популярные категории</h2>
        </StyledHeading>
        <CategoryList>
          {datas.map((data) => (
            <Link to={"admen/" + data.id}>
              <StyledCategoryItem style={{ backgroundColor: `${data.color}` }}>
                <StyledImg src={data.img} />
                <StyledTitle>{data.title}</StyledTitle>
              </StyledCategoryItem>
            </Link>
          ))}
        </CategoryList>
      </Wrapper>
    </div>
  );
}

export default Categore;

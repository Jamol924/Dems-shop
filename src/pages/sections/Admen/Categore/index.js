import React from "react";
import datas from "./dataCategore";
import { Link } from "react-router-dom";
import {
  CategoryList,
  StyledHeading,
  Wrapper,
} from "../../../../components/CategorySection";
import { StyledCategoryItem, StyledImg, StyledTitle } from "../../../../components/common/CategoryItem";
import { useSelector } from "react-redux";
import L from "../../../../locale/language.json"

function Categore() {
  const lan = useSelector(state => state.allLanguage)  

  return (
    <div>
      <Wrapper >
        <StyledHeading >
          <h2>{L.popcat[lan]}</h2>
        </StyledHeading>
        <CategoryList>
          {datas.map((data) => (
            <Link to={"admen/" + data.id}>
              <StyledCategoryItem style={{ backgroundColor: `${data.color}` }}>
                <StyledImg src={data.img} />
                <StyledTitle>{data.title[lan]}</StyledTitle>
              </StyledCategoryItem>
            </Link>
          ))}
        </CategoryList>
      </Wrapper>
    </div>
  );
}

export default Categore;

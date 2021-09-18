import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import CategoryItem from ".//common/CategoryItem";
import chart from "../assets/presention-chart.svg";
import watch from "../assets/watch.svg";
import car from "../assets/car.svg";
import house from "../assets/house.svg";
import bank from "../assets/bank.svg";
import styled from "styled-components";

const CategorySection = () => {
  const data = [
    { img: chart, title: "Buisness & Industry" },
    { img: bank, title: "Education" },
    { img: watch, title: "Electronics" },
    { img: house, title: "Property" },
    { img: car, title: "Car & Automobiles" },
  ];

  return (
    <Wrapper>
      <StyledHeading>
        <h2>Popular Categories</h2>
      </StyledHeading>
      <CategoryList>
        {data.map((item) => (
          <CategoryItem img={item.img} title={item.title} />
        ))}
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

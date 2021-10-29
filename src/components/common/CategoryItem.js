import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <Link to={props.id}>
      <StyledCategoryItem style={{backgroundColor:`${props.color}`}} >
        <StyledImg src={props.img} />
        <StyledTitle>{props.title}</StyledTitle>
      </StyledCategoryItem>
    </Link>
  );
};

export const StyledCategoryItem = styled.div`
  width: 235px;
  height: 149px;
  margin: 20px;
  display: flex;
  background: #f5f7fa;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;
export const StyledImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  -webkit-transition: all 0.9s;
  transition: all 0.9s;
  z-index: 10;
`;
export const StyledTitle = styled.p`
  position: absolute;
  top: -5px;
  left: 20px;
  z-index: 22;
  color: white;
  font-size: 20px;
`;

export default CategoryItem;

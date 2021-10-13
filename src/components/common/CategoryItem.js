import styled from "styled-components";
import { Link } from "react-router-dom";
import images from "../../assets/Cars.jpg";

const CategoryItem = (props) => {
  return (
    <Link to={props.id}>
      <StyledCategoryItem>
        <Fond></Fond>
        <StyledImg src={props.img} />
        <StyledTitle>{props.title}</StyledTitle>
      </StyledCategoryItem>
    </Link>
  );
};

const StyledCategoryItem = styled.div`
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
const Fond = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 18;
  transition: all 0.5s;
  background-color:rgba(18, 19, 27, 0.308);
  &:hover{
    background-color: rgba(18, 19, 27, 0.644);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.9s;
  &:hover{
    transform: rotate(35deg);
    transform: scale(1.6,1.6);
  }
`;
const StyledTitle = styled.p`
  position: absolute;
  top: 10px;
  left:20px;
  z-index: 22;
  color: white;
  font-size: 20px;
`;

export default CategoryItem;

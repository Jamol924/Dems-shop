import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <Link to={props.id}>
      <StyledCategoryItem>
        <div className="circle">
          <img src={props.img} />
        </div>
        <div>
          <p>{props.title}</p>
          <span>0 ads</span>
        </div>
      </StyledCategoryItem>
    </Link>
  );
};




const StyledCategoryItem = styled.div`
  width: 235px;
  height: 149px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 8px;

  .circle {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  span {
    font-size: 12px;
    line-height: 15px;
    color: #999999;
    font-weight: 500;
    font-style: normal;
    font-family: "Inter", sans-serif;
    padding-top: 5px;
  }

  &:hover {
    background: #f85c70;
    color: #fff;
    .circle {
      background: #fff;
    }
    span {
      color: #fff;
    }
    p {
      color: white;
    }
  }

  * {
    text-align: center;
  }
`;

export default CategoryItem;

import img from "../../assets/phone.png";
import React, { useEffect } from "react";
import styled from "styled-components";
import Adsjr from "../../../components/common/Adsjr";
import { setProducts } from "../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";


const Ads = () => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);

  const productFetch = async () => {
    const respon = await fetch("http://fakestoreapi.com/products");
    const jsonP = await respon.json();
    dispatch1(setProducts(jsonP));
  };

  useEffect(() => {
    productFetch();
  }, []);
  console.log(products1);


  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Featured Ads</h1>
          </div>
          <Row>
            <Adsjr datas />
          </Row>
        </div>
      </Wrapper>
      <StyledH>Show more...</StyledH>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 5px;
    font-family: "Quicksand", sans-serif;
  }
`;

const Row = styled.div`
  width: 1015px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1066px) {
    width: 755px;
  }
  @media (max-width: 800px) {
    width: 495px;
  }
`;

const StyledH = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  font-style: normal;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  color: #000000;
  padding-bottom: 66px;
`;

export default Ads;

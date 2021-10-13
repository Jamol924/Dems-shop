import React, { useEffect } from "react";
import styled from "styled-components";
import Adsjr from "../../../../components/common/Adsjr";
import { setProducts } from "../../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const CardBusines = () => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);

  const productFetch = async () => {
    const respons = await axios
      .post("http://dems.inone.uz/api/ad/latest/get-pagin", {
        limit: 20,
        page: 1,
        type: "business-service",
      })
      .then((res) => {
        console.log(res.data.data.data);
        dispatch1(setProducts(res.data.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Buisness & Industry</h1>
          </div>
          <Row>
            <Adsjr datas={products1} />
          </Row>
        </div>
      </Wrapper>
      {/* <StyledH>Show more...</StyledH> */}
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
    margin-top: 69px;
    margin-bottom: 43px;
  }
`;

const Row = styled.div`
  width: 1020px;
  height: auto;
  display: flex;
  margin-right: 20px;
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

export default CardBusines;

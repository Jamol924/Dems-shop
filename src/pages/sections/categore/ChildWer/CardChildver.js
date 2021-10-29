import React, { useEffect } from "react";
import styled from "styled-components";
import Adsjr from "../../../../components/common/Adsjr";
import { setProducts } from "../../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const CardElictron = ({ filters }) => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);

  const productFetch = async () => {
    const respons = await axios
      .post("http://dems.inone.uz/api/ad/get-pagin", {
        limit: 10,
        page: 1,
        search: "",
        type: "childrens-world",
      })
      .then((res) => {
        console.log(res.data.data.data);
        dispatch1(setProducts(res.data.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  const Filter = products1.filter(
    (eliment) =>
      (filters.location.length > 0
        ? eliment.region_id === filters.location
        : true) &&
      (filters.search.length > 0
        ? eliment.title.toLowerCase().includes(filters.search.toLowerCase())
        : true)
  );

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Детский мир</h1>
          </div>
          <Row>
            <Adsjr datas={Filter.length >= 0 ? Filter : products1} />
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

export default CardElictron;

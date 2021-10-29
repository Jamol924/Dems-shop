import React, { useEffect } from "react";
import styled from "styled-components";
import Adsjr from "../../../components/common/Adsjr";
import { setProducts } from "../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Ads = () => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);
  const filters = useSelector((state) => state.Search.data)
  console.log( "Qidirish",products1, filters.location )
  const productFetch = async () => {
    await axios
      .post("http://dems.inone.uz/api/ad/latest/get-pagin", {
        limit: 20,
        page: 1,
      })
      .then((res) => {
        dispatch1(setProducts(res.data.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    productFetch();
  }, []);

  const Filter = products1.filter(
    (eliment) =>
      (filters.location 
        ? eliment.region_id === filters.location
        : true) &&
      (filters.search 
        ? eliment.title.toLowerCase().includes(filters.search.toLowerCase())
        : true) &&
      (filters.category ? eliment.type === filters.category : true)
  );

  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Избранные объявления</h1>
          </div>
          <Row>
            <Adsjr datas={(Filter.length >= 0 ? Filter :
              products1) } />
          </Row>
        </div>
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div`
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

export const Row = styled.div`
  width: 1020px;
  height: auto;
  display: flex;
  margin-right: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1066px) {
    width: 770px;
  }
  @media (max-width: 800px) {
    width: 530px;
  }
`;

export default Ads;

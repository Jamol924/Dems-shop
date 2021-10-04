import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "../../../components/Image";
import Info from "../../../components/Info";
import Features from "../../../components/Features";
import SellerInfo from "../../../components/SellerInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
} from "../../../redux/active/productActions";
import axios from "axios";

const MainInfo = () => {
  const productCard = useSelector((state) => state.productCard);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const responsve = await axios
      .post(`http://dems.inone.uz/api/ad/get-by-id`,{limit:10 , _id:`${productId}`})
      .catch((err) => {
        console.log("Err", err);
      });
      dispatch(selectedProduct(responsve.data.data));
    };

  useEffect(() => {
    if (productId && productId !== " ") fetchProductDetail();
  }, [productId]);


  return (
    <div>
      {Object.keys(productCard).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Wrapper>
          <Left>
            <Image dataProduct={productCard} />
            <Info dataInfo={productCard} />
            <Features dataFeatures={productCard} />
          </Left>
          <Right>
            <SellerInfo dataSeller={productCard} />
          </Right>
        </Wrapper>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 100px;
`;
const Left = styled.div`
  background: white;
  margin-right: 10px;
  padding: 10px;
`;
const Right = styled.div`
  background: white;
  margin-left: 10px;
  height: max-content;
  padding: 10px;
`;

export default MainInfo;

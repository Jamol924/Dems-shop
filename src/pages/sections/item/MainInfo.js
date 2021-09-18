import React from "react";
import styled from "styled-components";
import Image from "../../../components/Image";
import Info from "../../../components/Info";
import Features from "../../../components/Features";
import SellerInfo from "../../../components/SellerInfo";
import InfoUs from "../home/InfoUs";

const MainInfo = () => {
  return (
    <div>
      <Wrapper>
      <Left>
        <Image />
        <Info />
        <Features />
      </Left>
      <Right>
        <SellerInfo />
      </Right>
    </Wrapper>
    <InfoUs />
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

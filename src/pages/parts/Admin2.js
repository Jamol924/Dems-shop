import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import AddButton from "../sections/AddProduct/AddButton";
import AddChickbox from "../sections/AddProduct/AddChickbox";
import AdresAdd from "../sections/AddProduct/AdresAdd";
import CategoreAdd from "../sections/AddProduct/CategoreAdd";
import ProductCreate from "../sections/AddProduct/ProductCreate";
import TovarAdd from "../sections/AddProduct/TovarAdd";
import InfoUs from "../sections/home/InfoUs";

function Admin1() {
  return (
    <>
      <Wrapper>
        <Nav />
        <ContainerCategore>
          <TitleProduct>E'lon joylashtirish</TitleProduct>
          <CategoreAdd />
          <ProductCreate />
          <TovarAdd />
          <AdresAdd />
          <AddChickbox />
          <AddButton />
        </ContainerCategore>
        <InfoUs />
      </Wrapper>
    </>
  );
}

export default Admin1;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid red;
`;

const ContainerCategore = styled.div`
  padding: 0px 55px;
`;
const TitleProduct = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 15px;
  font-family: "Quicksand", sans-serif;
  padding: 120px 0px 30px;
`;

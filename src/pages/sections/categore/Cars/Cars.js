import React, { useState } from "react";
import InfoUs from "../../home/InfoUs";
import CardAuto from "./CardAuto";
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {Cars} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";
import Nav2 from "../../../../components/Nav2";
import { useSelector } from "react-redux";
import LoaderSpinner from "../../../../Loader/loader";
import { PaginationCard } from "../../../../components/pagenaton/Paginat";



function Automobile() {
  const products1 = useSelector((state) => state.allProducts.products);
  const [data, setData] = useState({ location: "", search: "" });

  return products1 ? (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
      </NavbarContent>
      <BackContent>
        <Cars />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardAuto filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  ) :  ( <LoaderSpinner /> ) ;
}

export default Automobile;

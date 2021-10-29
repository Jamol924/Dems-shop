import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import InfoUs from '../../home/InfoUs'
import CardAgriculture from './CardAgriculture'
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackAgriculture} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";

function Properti() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
      </NavbarContent>
      <BackContent>
        <BackAgriculture />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardAgriculture filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Properti;


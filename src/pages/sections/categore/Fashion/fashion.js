import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import InfoUs from '../../home/InfoUs'
import CardFashion from  "./CardFashion"
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackFashion} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Automobile() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
        <MinNav />
      </NavbarContent>
      <BackContent>
        <BackFashion />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardFashion filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Automobile;

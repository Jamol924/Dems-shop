import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import InfoUs from '../../home/InfoUs'
import CardBusines from './CardBusines'
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackBusines} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Busines() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
        <MinNav />
      </NavbarContent>
      <BackContent>
        <BackBusines />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardBusines filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Busines;

import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import InfoUs from '../../home/InfoUs'
import CardChildver from './CardChildver'
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackChildren} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Elictronic() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
        <MinNav />
      </NavbarContent>
      <BackContent>
        <BackChildren />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardChildver filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Elictronic;

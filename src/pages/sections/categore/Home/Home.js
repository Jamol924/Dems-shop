import React, { useState } from "react";
import CardHome from  "./CardHome"
import Nav2 from "../../../../components/Nav2";
import InfoUs from "../../home/InfoUs";
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackHome} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";

function Automobile() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
      </NavbarContent>
      <BackContent>
        <BackHome />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardHome filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Automobile;


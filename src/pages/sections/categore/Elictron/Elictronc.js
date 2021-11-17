import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackElictronic} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";


import CardElictron from "./CardElictron";
import InfoUs from "../../home/InfoUs";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Elictronic() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
        <MinNav/>
      </NavbarContent>
      <BackContent>
        <BackElictronic />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardElictron filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Elictronic;


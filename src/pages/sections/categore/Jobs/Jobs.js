import React, { useState } from "react";
import Nav2 from "../../../../components/Nav2";
import CardJobs from  "./CardJobs"
import InfoUs from '../../home/InfoUs'


import {
  Wrapper,
  NavbarContent,
  BackContent,
  SearchContent,
  AdsContent,
} from "../../../sections/SearchProduct/SearchCard";
import {BackJobs} from "../../../../components/Back";
import SearchMene from "../../../../components/SearchMene";

function Automobile() {
  const [data, setData] = useState({ location: "", search: "" });
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
      </NavbarContent>
      <BackContent>
        <BackJobs />
      </BackContent>
      <SearchContent>
        <SearchMene
          onFiltersCh={(info) => {
            setData(info);
          }}
        />
      </SearchContent>
      <AdsContent>
        <CardJobs filters={data} />
      </AdsContent>
      <InfoUs />
    </Wrapper>
  );
}

export default Automobile;


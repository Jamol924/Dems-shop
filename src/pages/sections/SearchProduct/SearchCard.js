import {Back} from "../../../components/Back";
import Search from "../../../components/Search";
import Ads from "../home/Ads";
import styled from "styled-components";
import Nav2 from "../../../components/Nav2";

function SearchCard() {

  
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
      </NavbarContent>
      <BackContent>
        <Back />
      </BackContent>
      <SearchContent>
        <Search  />
      </SearchContent>
      <AdsContent>
        <Ads />
      </AdsContent>
    </Wrapper>
  );
}

export default SearchCard;

export const Wrapper = styled.div`
  width: 100%;
`;

export const NavbarContent = styled.div`
  width: 100%;
`;
export const BackContent = styled.div`
  width: 100%;
`;

export const SearchContent = styled.div`
  width: 100%;
  z-index: 10;
`;
export const AdsContent = styled.div`
  width: 100%;
`;

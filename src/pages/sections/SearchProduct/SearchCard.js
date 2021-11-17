import {Back} from "../../../components/Back";
import Search from "../../../components/Search";
import Ads from "../home/Ads";
import styled from "styled-components";
import Nav2 from "../../../components/Nav2";
import MinNav from "../../../components/common/MineNavbar/MinNav";
import InfoUs from "../home/InfoUs";

function SearchCard() {

  
  return (
    <Wrapper>
      <NavbarContent>
        <Nav2 />
        <MinNav />
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
      <InfoUs />
    </Wrapper>
  );
}

export default SearchCard;

export const Wrapper = styled.div`

  width: 100%;
  /* @media(max-width:550px){
    margin-bottom: 100px;
  }  */
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
  @media(max-width:550px){
    margin-top: 100px;
  }
`;

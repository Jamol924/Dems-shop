import React, { useState, useEffect } from "react";
import axios from "axios";
import datas from "../pages/sections/Admen/Categore/dataCategore";
import SearchIcon from '@mui/icons-material/Search';
import { SearchSvg1, SearchSvg2, SearchSvg3 } from "../icon/SearchSvg";
import {
  Wrapper,
  WrapperMenu,
  WrapperForm,
  WrapperTitle,
  TitleH1,
  TitleP,
  FormInput,
  FormLocation,
  FormCategory,
  FormText,
  FormInputActive,
  LocationStyles,
  LocationSty,
  StyledLoadingButton
} from "../components/common/MaterialComponent/AboutSection";
const AboutSection = () => {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const [input, setInput] = React.useState(null);
  const [regions, setRegions] = useState([]);

  const [value, setValue] = useState("");
  const handleRegion = (el) => {
    setValue(el.target.value);
  };

  const regionFetch = async () => {
    axios
      .post("http://dems.inone.uz/api/region/get-pagin", {
        limit: 20,
        page: 1,
        search: " ",
      })
      .then((res) => {
        setRegions(res.data.data.data);
      })
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    regionFetch();
  }, []);

  return (
    <Wrapper>
      <WrapperMenu>
        <WrapperTitle>
          <TitleH1>Buy, Sell, Rent & Exchange in one Click</TitleH1>
          <TitleP>
            Search from over 2000+ Active Ads in 29+ Categories for Free
          </TitleP>
        </WrapperTitle>
        <WrapperForm>
          <FormInput>
            <FormLocation>
              <SearchSvg1 />
              <input
                onFocus={() => setInput(1)}
                onClick={handleRegion}
                value={value}
                onBlur={() => setInput(null)}
                placeholder="Select Location"
                type="text"
              />
            </FormLocation>
            <FormCategory>
              <SearchSvg2 />
              <input
                onFocus={() => setInput(2)}
                onBlur={() => setInput(null)}
                placeholder="Select Category"
                type="text"
              />
            </FormCategory>
            <FormText>
              <SearchSvg3 />
              <input placeholder="Enter keyword here..." type="text" />
            </FormText>
              <StyledLoadingButton
                onClick={handleClick}
                startIcon={<SearchIcon />}
                loading={loading}
                loadingPosition="start"
                variant="contained"
              >
                Search
              </StyledLoadingButton>
          </FormInput>
          <FormInputActive>
            {input === 1 && (
              <LocationStyles>
                {regions.map((regon) => (
                  <option key={regon._id} value={regon._id}>
                    {regon.name}
                  </option>
                ))}
              </LocationStyles>
            )}
            {input === 2 && (
              <LocationSty>
                {datas.map((dat) => (
                  <p>{dat.title}</p>
                ))}
              </LocationSty>
            )}
          </FormInputActive>
        </WrapperForm>
      </WrapperMenu>
    </Wrapper>
  );
};

export default AboutSection;

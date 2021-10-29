import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { SearchSvg1, SearchSvg3 } from "../icon/SearchSvg";
import {
  Wrapper,
  WrapperMenu,
  WrapperForm,
  FormInput,
  FormLocation,
  FormText,
  FormInputActive,
  LocationStyles,
  StyledLoadingButton,
  ButtonLink,
} from "../components/common/MaterialComponent/AboutSection";

const SearchMene = ({onFiltersCh}) => {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }
  const [data, setData] = useState({
    location: "",
    search: "",
  });

  
  const funcButton = (data) => {
    return onFiltersCh(data)
  }

  const changeData = (name, value) => {
    setData({ ...data, [name]: value });
    setInput(null);
  };

  const [input, setInput] = useState(null);
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
        <WrapperForm>
          <FormInput>
            <FormLocation>
              <SearchSvg1 />
              <input
                onFocus={() => setInput(1)}
                onClick={handleRegion}
                value={regions.find((reg) => reg._id === data.location)?.name}
                placeholder="Select Location"
                type="text"
              />
            </FormLocation>
            <FormText>
              <SearchSvg3 />
              <input onChange={e => changeData("search",e.target.value)} placeholder="Enter keyword here..." type="text" />
            </FormText>
            <ButtonLink>
                <StyledLoadingButton
                  onClick={() =>{funcButton(data)}}
                  startIcon={<SearchIcon />}
                  loading={loading}
                  loadingPosition="start"
                  variant="contained"
                >
                  Search
                </StyledLoadingButton>
            </ButtonLink>
          </FormInput>
          <FormInputActive>
            {input === 1 && (
              <LocationStyles>
                {regions.map((regon) => (
                  <option
                    onClick={() => changeData("location", regon._id)}
                    key={regon._id}
                    value={regon._id}
                  >
                    {regon.name}
                  </option>
                ))}
              </LocationStyles>
            )}
          </FormInputActive>
        </WrapperForm>
      </WrapperMenu>
    </Wrapper>
  );
};

export default SearchMene;

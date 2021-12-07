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
  ButtonLinkItem,
} from "../components/common/MaterialComponent/AboutSection";
import { useSelector } from "react-redux";
import L from "../locale/language.json";

const SearchMene = ({ onFiltersCh }) => {
  const [loading, setLoading] = useState(false);
  const filters = useSelector((state) => state.Search.data);
  function handleClick() {
    setLoading(true);
  }
  const [data, setData] = useState({
    location: filters.location,
    search: "",
  });

  const funcButton = (data) => {
    return onFiltersCh(data);
  };

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
   await axios
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

  const lan = useSelector((state) => state.allLanguage);
  const reg = [
    {
      name: L.asia.locationName[lan],
      id: 1,
    },
  ];

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
                value={
                  regions.find((reg) => reg._id === data.location)?.name ||
                  reg.find((el) => el.id === data.location)?.name
                }
                placeholder={L.asia.location[lan]}
                type="text"
              />
            </FormLocation>
            <FormText>
              <SearchSvg3 />
              <input
                onChange={(e) => changeData("search", e.target.value)}
                placeholder={L.asia.search[lan]}
                type="text"
              />
            </FormText>
            <ButtonLinkItem>
              <StyledLoadingButton
                ingButton
                onClick={() => {
                  funcButton(data);
                }}
                startIcon={<SearchIcon />}
              >
                {L.asia.button[lan]}
              </StyledLoadingButton>
            </ButtonLinkItem>
          </FormInput>
          <FormInputActive>
            {input === 1 && (
              <LocationStyles>
                {reg.map((el) => (
                  <option
                    onClick={() => changeData("location", el.id)}
                    key={el.id}
                    value={el.id}
                  >
                    {el.name}
                  </option>
                ))}
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

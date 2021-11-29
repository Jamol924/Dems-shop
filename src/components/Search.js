import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearch } from "../redux/active/productActions";
import axios from "axios";
import datas from "../pages/sections/Admen/Categore/dataCategore";
import SearchIcon from "@mui/icons-material/Search";
import { SearchSvg1, SearchSvg2, SearchSvg3 } from "../icon/SearchSvg";
import {
  Wrapper,
  WrapperMenu,
  WrapperForm,
  FormInput,
  FormLocation,
  FormCategory,
  FormText,
  FormInputActive,
  LocationStyles,
  LocationSty,
  StyledLoadingButton,
  ButtonLink,
  LinkStyled
} from "../components/common/MaterialComponent/AboutSection";
import { Link } from "react-router-dom";
import L from "../locale/language.json";

const Search = () => {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.allLanguage);
  const filters = useSelector((state) => state.Search.data);

  const [data, setData] = useState({
    location: filters.location,
    category: filters.category,
    search: filters.search,
  });

  const FuncButton = (data) => {
    return dispatch(useSearch(data));
  };

  const changeData = (name, value) => {
    setData({ ...data, [name]: value });
    setInput(null);
  };

  const [input, setInput] = useState(null);
  const [regions, setRegions] = useState([]);

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

  console.log(datas[0].title[lan]);
  useEffect(() => {
    regionFetch();
  }, []);

  const reg = [
    {
      name: L.asia.locationName[lan],
      id: 1,
      name1: L.asia.categoryName[lan],
      id1: 2,
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
                value={
                  regions.find((reg) => reg._id === data.location)?.name ||
                  reg.find((el) => el.id === data.location)?.name
                }
                placeholder={L.asia.location[lan]}
                type="text"
              />
            </FormLocation>
            <FormCategory>
              <SearchSvg2 />
              <input
                onFocus={() => setInput(2)}
                placeholder={L.asia.category[lan]}
                type="text"
                value={
                  datas.find((item) => item.id === data.category)?.title.uz ||
                  reg.find((e) => e.id1 === data.category)?.name1
                }
              />
            </FormCategory>
            <FormText>
              <SearchSvg3 />
              <input
                onChange={(e) => changeData("search", e.target.value)}
                placeholder={L.asia.search[lan]}
                type="text"
              />
            </FormText>
            <LinkStyled  to="/searchCard">
              <ButtonLink>
                <StyledLoadingButton
                  onClick={() => FuncButton(data)}
                  startIcon={<SearchIcon />}
                >
                  {L.asia.button[lan]}
                </StyledLoadingButton>
              </ButtonLink>
            </LinkStyled>
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
            {input === 2 && (
              <LocationSty>
                {reg.map((el) => (
                  <p
                    onClick={() => changeData("category", el.id1)}
                    value={el.id1}
                  >
                    {el.name1}
                  </p>
                ))}
                {datas.map((dat) => (
                  <p onClick={() => changeData("category", dat.id)}>
                    {dat.title[lan]}
                  </p>
                ))}
              </LocationSty>
            )}
          </FormInputActive>
        </WrapperForm>
      </WrapperMenu>
    </Wrapper>
  );
};

export default Search;

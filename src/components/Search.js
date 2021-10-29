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
} from "../components/common/MaterialComponent/AboutSection";
import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
 

  const [data, setData] = useState({
    location: "",
    category: "",
    search: "",
  });


  const FuncButton = (data) => {
  return ( dispatch(useSearch(data)))
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

  const [eliment, setEliment] = useState("");
  const [elimen, setElimen] = useState("");

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
                value={regions.find((reg) => reg._id === data.location)?.name || eliment}
                placeholder="Select Location"
                type="text"
              />
            </FormLocation>
            <FormCategory>
              <SearchSvg2 />
              <input
                onFocus={() => setInput(2)}
                placeholder="Select Category"
                type="text"
                value={datas.find((item) => item.id === data.category)?.title || elimen}
              />
            </FormCategory>
            <FormText>
              <SearchSvg3 />
              <input onChange={e => changeData("search", e.target.value)} placeholder="Enter keyword here..." type="text" />
            </FormText>
            <ButtonLink>
              <Link to="/searchCard">
                <StyledLoadingButton
                  onClick={() => FuncButton(data)}
                  startIcon={<SearchIcon />}
                  loadingPosition="start"
                  variant="contained"
                > 
                  Search
                </StyledLoadingButton>
              </Link>
            </ButtonLink>
          </FormInput>
          <FormInputActive>
            {input === 1 && (
              <LocationStyles>
                <div onClick={(e) => ( changeData( regions._id), setEliment(e.target.textContent))} >Butun Uzbekiston buylab</div>
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
                <div onClick={(e) => (changeData(datas._id), setElimen(e.target.textContent))} >Bce Categore</div>
                {datas.map((dat) => (
                  <p onClick={() => changeData("category", dat.id)}>
                    {dat.title}
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

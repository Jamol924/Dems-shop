import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../redux/active/productActions";
import L from "../../../locale/language.json"

export default function Langue() {
  const lan = useSelector(state => state.allLanguage) 
  const dispatch = useDispatch();

  const [age, setAge] = useState(localStorage.getItem("language") || "uz");

  return (
    <StyledFormControl fullWidth>
      <Select
        sx={{ color: "black" }}
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
          dispatch(language(e.target.value));
          localStorage.setItem("language", e.target.value);
        }}
      >
        <MenuItem value="uz">{L.til.uzbek[lan]}</MenuItem>
        <MenuItem value="ru">{L.til.rus[lan]}</MenuItem>
        <MenuItem value="en">{L.til.eng[lan]}</MenuItem>
      </Select>
    </StyledFormControl>
  );
}
export const StyledFormControl = styled(FormControl)`
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
    color: black;
  }
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: black;
  }
  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
    color: black;
  }
`;

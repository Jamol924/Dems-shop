import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { language } from "../redux/active/productActions";
import { useDispatch, useSelector } from "react-redux";
import L from "../locale/language.json";
const Nav = () => {
  const lan = useSelector((state) => state.allLanguage);
  const [pageOffset, setPageOffset] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setPageOffset(true);
      else setPageOffset(false);
    });
  }, []);

  const [age, setAge] = useState(localStorage.getItem("language") || "uz");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.allCounter);

  return (
    <>
      <StyledNav isScroll={pageOffset}>
        <Link to="/">
          <StyledH1>
            <a href="#">Dems</a>
          </StyledH1>
        </Link>

        <ul>
          <li>
            <StyledFormControl fullWidth>
              <Select
                sx={{ display: "flex" }}
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  dispatch(language(e.target.value));
                }}
              >
                <MenuItem value="uz">{L.til.uzbek[lan]}</MenuItem>
                <MenuItem value="ru">{L.til.rus[lan]}</MenuItem>
                <MenuItem value="en">{L.til.eng[lan]}</MenuItem>
              </Select>
            </StyledFormControl>
          </li>
          {counter ? (
            <li style={{ display: "flex" }}>
              <AccountCircleIcon className="icon" sx={{ color: "white" }} />
              <Link to="/myProfil">
                <a href="">{L.navbar.profil[lan]} </a>
              </Link>
            </li>
          ) : (
            <span></span>
          )}
          <li>
            <Link to="/admen">
              <ButtonRight>
                <StyledButton startIcon={<AddIcon />}>
                  {L.navbar.add[lan]}
                </StyledButton>
              </ButtonRight>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export const StyledButton = styled(Button)`
  height: 45px;
  &.MuiButton-root {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    padding: 0px 20px;
  }
  && {
    background: #3545a3;
    color: white;
    padding: 0px 20px;
    border-radius: 24px;

    &:hover {
      background: #2a3a96;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    color: white;
  }
  .css-1oybtu7-MuiInputBase-root-MuiOutlinedInput-root {
    color: white;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: none;
    color: white;
  }
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: white;
  }
  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
    color: white;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
  transition: all 0.6s ease;
  @media (max-width: 550px) {
    display: none;
  }
  ${(props) =>
    props.isScroll
      ? css`
          background: white;
          box-shadow: 5px 0 10px lightgray;
          transition: all 0.5s ease;
          height: 60px;
          a {
            color: black;
          }
          .icon {
            color: black;
          }
          .css-1oybtu7-MuiInputBase-root-MuiOutlinedInput-root {
            color: black;
          }
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
            color: black;
          }
          .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
            color: black;
          }
          .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
            color: black;
          }
        `
      : css`
          background: transparent;
          transition: all 0.5s ease;
          height: 80px;
          a {
            color: white;
          }
          select {
            color: white;
          }
          .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
            padding-right: 32 px;
            color: white;
          }
        `}
  a {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  li:nth-child(2) {
    margin-right: 50px;
  }
  li {
    margin-left: 15px;
    position: relative;
    span {
      margin-right: "5px";
      font-size: "30px";
      color: "white";
    }
  }
  select {
    border: none;
    outline: none;
    background: transparent;
    padding: 5px 0px;
    option {
      background: transparent;
      color: black;
      border: none;
    }
  }
`;

export const StyledH1 = styled.h1`
  a {
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
    font-family: "Quicksand", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
export const ButtonRight = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Nav;

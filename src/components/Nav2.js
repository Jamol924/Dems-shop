import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { StyledButton,  } from "./Nav";

const Nav2 = () => {
  const [pageOffset, setPageOffset] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setPageOffset(true);
      else setPageOffset(false);
    });
  }, []);

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
            <select>
              <option>UZB</option>
              <option>RUS</option>
              <option>ENG</option>
            </select>
          </li>
          <li>
            <Link to="/myProfil">
              <a href="">Мy profile </a>
            </Link>
          </li>

          <li>
          <Link to="/admen">
              <ButtonRight>
                <StyledButton
                  startIcon={<AddIcon />}
                  sx={{
                    color: "white",
                    borderRadius: "24px",
                    backgroundColor: "#f85c70",
                  }}
                >
                  Post your Ad
                </StyledButton>
              </ButtonRight>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Nav2;



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
  border-bottom: 1px solid #ccc;

  ${(props) =>
    props.isScroll
      ? css`
          background: white;
          box-shadow: 5px 0 10px lightgray;
          height: 70px;
          border-bottom: none;
          a {
            color: black;
          }
        `
      : css`
          background: transparent;
          transition: all 0.5s ease;
          a {
            color: black;
          }
          select {
            color: black;
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
    margin-right: 92px;
  }
  li {
    margin-left: 32px;
    position: relative;
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



import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { StyledButton,  } from "./Nav";
import { useSelector } from "react-redux";
import Langue from "./common/Langue/langue";
import L from "../locale/language.json"
const Nav2 = () => {
  const lan = useSelector(state => state.allLanguage)  
  const [pageOffset, setPageOffset] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setPageOffset(true);
      else setPageOffset(false);
    });
  }, []);

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
            <Langue />
          </li>
          {counter ? (
            <li style={{ display: "flex" }}>
              <AccountCircleIcon className="icon" sx={{ color: "black" }} />
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
                <StyledButton
                  startIcon={<AddIcon />}
                  sx={{
                    color: "white",
                    borderRadius: "24px",
                    backgroundColor: "#f85c70",
                  }}
                >
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
  @media(max-width:550px){
    display: none;
  } 

  ${(props) =>
    props.isScroll
      ? css`
          background: white;
          box-shadow: 5px 0 10px lightgray;
          height: 60px;
          border-bottom: none;
          transition: all 0.5s ease;

          a {
            color: black;
          }
        `
      : css`
          background: transparent;
          transition: all 0.5s ease;
          box-shadow: 5px 0 5px lightgray;
          height: 80px;
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
    margin-right: 50px;
  }
  li {
    margin-left: 15px;
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



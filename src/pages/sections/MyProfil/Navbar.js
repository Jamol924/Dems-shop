import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import L from "../../../locale/language.json"
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { StyledB } from "../item/Nav";

const Navbar = () => {
  const [pageOffset, setPageOffset] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(localStorage.removeItem("token"));
    window.location.reload();
  };
 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setPageOffset(true);
      else setPageOffset(false);
    });
  }, []);

  const lan = useSelector(state => state.allLanguage) 
  return (
    <>
      <StyledNav isScroll={pageOffset}>
        <Link to="/">
          <StyledH1>
            <a href="#">Dems</a>
          </StyledH1>
        </Link>
        <StyledB>
          <ul>
            <li>
              <Link to="/My-adds">
                <a href="">
                  <span><PostAddIcon /></span> {L.navb.ad[lan]}
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admenName">
                <a href="">
                  <span><SettingsIcon /></span>{L.navb.set[lan]}
                </a>
              </Link>
            </li>
            <li>
              <LogOut onClick={handleClickOpen}>
                <span><ExitToAppIcon /></span> {L.navb.lout[lan]}
              </LogOut>
            </li>
          </ul>
        </StyledB>
      </StyledNav>
    </>
  );
};

export default Navbar;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
`;
export const CardImages = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CardH = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 16px;
`;
export const CardP = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 16px;
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
  @media(max-width:550px){
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
        `
      : css`
          background: transparent;
          transition: all 0.5s ease;
          height: 80px;
          box-shadow: 5px 0 5px lightgray;
          a {
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
  span{
    color: rgba(0, 0, 0, 0.87);
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  li:nth-child(3) {
    margin-right: 12px;
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

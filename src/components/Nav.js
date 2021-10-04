import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Nav = () => {
  const [modalActive, setModalActive] = useState(false);
  const { pathname } = useLocation();
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllAds">All Ads</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/contact">
            <ButtonRight>
              
                <Button
                  style={{
                    width: 250,
                    height: 45,
                    borderRadius: 24,
                    backgroundColor: "#f85c70",
                    fontSize: 5,
                  }}
                  variant="contained"
                  color="error"
                >
                  <AddIcon />
                  <BtnTitle>Post your Ad</BtnTitle>
                </Button>
              
            </ButtonRight>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
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

  ${(props) =>
    props.isScroll
      ? css`
          background: white;
          box-shadow: 5px 0 10px lightgray;
          height: 70px;

          a {
            color: black;
          }
        `
      : css`
          background: transparent;
          transition: all 0.5s ease;

          a {
            color: white;
            &.chesk {
              color: blue;
              background-color: blue;
            }
          }
        `}
  a {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  /* button {
    margin-left: 25px;
    background: #f85c70;
    border-radius: 23px;
    border: 1px solid #f85c70;
    color: white;
    width: 150px;
    height: 46px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    span {
      margin-left: 5px;
      font-size: 15px;
    }
  } */
  li:nth-child(3) {
    margin-right: 92px;
  }
  li {
    margin-left: 32px;
    .line {
      color: white;
      width: 2px;
    }
    position: relative;
    .language {
      color: black;
      font-family: "Inter", sans-serif;
    }

    &.dropdown {
      position: relative;
      transition: all 0.5s ease;

      &:hover {
        transition: all 0.5s ease;
        .dropdown-menu {
          display: block;
        }
      }

      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 220px;
        background: #fff;
        &:hover {
          transition: all 0.5s ease;
        }
        h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-family: "Inter", sans-serif;
        }
        p {
          margin: 0px;
          display: block;
          text-align: center;
          padding: 10px 10px;
          transition: all 0.5s ease;
          &:hover {
            background: #f85c70;
            color: white;
          }
        }
        a {
          text-decoration: none;
          color: black;
          font-family: "Inter", sans-serif;
        }
      }
    }
  }
`;

const StyledH1 = styled.h1`
  a {
    font-size: 36px;
    font-weight: bold;
    line-height: 45px;
    font-family: "Quicksand", sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const ButtonRight = styled.div`
  width: 155px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const BtnTitle = styled.div`
  font-size: 12px;
  color: white;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f85c70;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
`;

const StyledModal = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      width: 225px;
      height: 30px;
      margin-left: 19px;
      margin-bottom: 15px;
      text-transform: capitalize;
    }
    label {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
    }
    button {
      margin-top: 20px;
    }
  }
`;

export default Nav;

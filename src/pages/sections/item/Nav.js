import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import messages from "../../../assets/messages.svg";
import user from "../../../assets/user.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Content>
        <Link to="/">
          <StyledH1>
            <a href="#">Dems</a>
          </StyledH1>
        </Link>
        <StyledB>
          <ul>
            <li>
              <a href="#">Home</a>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/item" ? "50%" : "0%" }}
              />
            </li>
            <li>
              <a href="#">All Ads</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </StyledB>
        <div>
          <ul>
            <li>
              <a href="#">
                <img src={messages} alt="messages" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={user} alt="user" />
              </a>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faPlus} /> <span>Post your Ad</span>
              </button>
            </li>
          </ul>
        </div>
      </Content>
    </StyledNav>
  );
};

export const StyledNav = styled.div`
  position: fixed;
  padding: 0px;
  top: 0;
  left: 0;
  background: white;
  right: 0;
  z-index: 1000;
`;

const Content = styled.nav`
  margin-left: 251px;
  margin-right: 182px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    font-family: "Inter", sans-serif;
    color: #000000;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  button {
    background: #f85c70;
    border-radius: 18px;
    border: 1px solid #f85c70;
    color: white;
    width: 155px;
    height: 50px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    span {
      margin-left: 5px;
    }
  }
  li {
    padding-left: 2.25rem;
    position: relative;
  }
`;

const StyledH1 = styled.h1`
  a {
    text-decoration: none;
    color: #f85c70;
    font-size: 36px;
    font-weight: 1000;
    line-height: 45px;
    font-family: "Quicksand", sans-serif;
    text-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    margin-top: 9px;
  }
`;

const StyledB = styled.div`
  padding-left: 30px;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f85c70;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
`;

export default Nav;

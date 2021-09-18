import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import Input from "./Input";
import Menu from '@material-ui/icons/Menu';


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
        <StyledH1>
          <a href="#">Dems</a>
        </StyledH1>
        
        <ul>
          <li>
            <a className="language" href="#">
              O'Z /
            </a>
          </li>
          <li>
            <a className="language" href="#">
              РУ
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="dropdown">
            <a href="#">
              Мой профиль <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <div className="dropdown-menu">
              <h3>Мой профиль</h3>
              <p>
                <a href="#">Объявления</a>
              </p>
              <p>
                <a href="#">Сообщения</a>
              </p>
              <p>
                <a href="#">Платежи и счёт Dems</a>
              </p>
              <p>
                <a href="#">Настройки</a>
              </p>
            </div>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button onClick={() => setModalActive(true)}>
              <FontAwesomeIcon icon={faPlus} /> <span>Post your Ad</span>
            </button>
          </li>
          <li className = "menuIcon">
            <Menu style={{color:"white"}} />
          </li>
        </ul>
      </StyledNav>

      <Modal active={modalActive} setActive={setModalActive}>
        <Input />
      </Modal>
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
          }
        `}
  a {
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    font-family: "Inter", sans-serif;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
  button {
    margin-left: 25px;
    background: #f85c70;
    border-radius: 8px;
    border: 1px solid #f85c70;
    color: white;
    width: 155px;
    height: 50px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    span {
      margin-left: 5px;
      font-size: 15px;
    }
  }
  li {
    .line {
      color: white;
      width: 2px;
    }
    padding-left: 2.25rem;
    position: relative;
    padding: 10px;
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
        &:hover{
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

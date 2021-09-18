import React from "react";
import styled from "styled-components";
import locat from "../assets/locat.svg";
import shop from "../assets/shop-add.svg";
import call from "../assets/call.svg";
import rectangle from "../assets/Rectangle 23.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SellerInfo = () => {
  return (
    <>
      <Wrapper>
        <h1>Seller Information</h1>
        <div>
          <img src={rectangle} />
          <h3> Murodjon Tursunov</h3>
        </div>
        <div>
          <img src={locat} />
          <p>Beshariq shahar, Farg’ona viloyati</p>
        </div>
        <div>
          <img src={shop} />
          <p> View Store</p>
        </div>
        <div>
          <img src={call} />
          <h2>+998 (99) 436XXXX</h2>
        </div>
        <h5>
          <a href="#">Click to revial phone number</a>
        </h5>
        <StyledBut>
          <button className="first">
            <a href="#">
              <FontAwesomeIcon icon={faComment} /> Chat
            </a>
          </button>
          <span>
            <button className="second">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} /> Email to seller
              </a>
            </button>
          </span>
        </StyledBut>
      </Wrapper>
      <StyledIm>
        <img src="https://source.unsplash.com/random" alt="Advertisement" />
      </StyledIm>
    </>
  );
};

const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 30px;
  background: white;
  padding-top: 20px;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    width: 240px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    font-family: "Inter", sans-serif;
  }
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    font-family: "Roboto", sans-serif;
    margin-left: 12px;
  }
  h3 {
    margin-left: 9px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #606067;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }
  h5 {
    a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;
      font-family: "Roboto", sans-serif;
      color: #6c7b90;
    }
  }
  button.first {
    background-color: #f85c70;
    border: none;
    width: 215px;
    height: 40px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: white;
    }
  }

  button.third {
    border: none;
    background: #6c7b90;
  }

  span {
    padding-top: 8px;
    button.second {
      background: #444444;
      color: white;
      border: none;
      width: 215px;
      height: 40px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

const StyledBut = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIm = styled.div`
  img {
    width: 240px;
    height: 400px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 20px;
  }
`;

export default SellerInfo;

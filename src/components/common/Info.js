import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <FlexItem>
        <h1>Dems</h1>
        <p>
          Dems is the LargeClassified Listiong Marketplace offers perfect Ads
          classified Web App to build your own classified websites.
        </p>
      </FlexItem>
      <FlexItem>
        <h2>How tel Sell Fast</h2>
        <div className="line" />
        <ul>
          <li>
            <a href="#">Selling Tips</a>
          </li>
          <li>
            <a href="#">Buy and Sell Quickly</a>
          </li>
          <li>
            <a href="#">Banner Advertising</a>
          </li>
          <li>
            <a href="#">Promote your Ad</a>
          </li>
        </ul>
      </FlexItem>
      <FlexItem>
        <h2>Information</h2>
        <div className="line" />
        <ul>
          <li>
            <a href="#">Company & Contact Info</a>
          </li>
          <li>
            <a href="#">Blog & Articles</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </FlexItem>
      <FlexItem>
        <h2>Help & Support</h2>
        <div className="line" />
        <ul>
          <li>
            <a href="#">Live Chat</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How to Stay Safe</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </FlexItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: black;
  h1 {
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;
    font-family: "Quicksand", sans-serif;
    padding-bottom: 42px;
  }
  h2 {
    font-family: "Quicksand", sans-serif;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%normal;
    padding-bottom: 42px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    font-family: "Inter", sans-serif;
    color: #999999;
    padding-top: 42px;
    line-height: 2;
  }
  ul {
    list-style: none;
  }
  li {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
    padding-top: 19px;
  }
  a {
    text-decoration: none;
    color: #999999;
  }
`;

const FlexItem = styled.div`
  width: 20%;
  padding-right:20px;
  margin-top: 71px;

  @media (max-width: 1000px) {
    width: 40%;

    h1 {
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 45px;
      line-height: 50px;
      font-family: "Quicksand", sans-serif;
      padding-bottom: 10px;
    }
    h2 {
      font-family: "Quicksand", sans-serif;
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%normal;
      padding-bottom: 42px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding-top: 42px;
      line-height: 2;
    }
    ul {
      list-style: none;
    }
    li {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      padding-top: 19px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    text-align: center;

    h1 {
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 45px;
      line-height: 50px;
      font-family: "Quicksand", sans-serif;
      padding-bottom: 0px;
    }
    h2 {
      font-family: "Quicksand", sans-serif;
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%normal;
      padding-bottom: 0px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding-top: 0px;
      line-height: 2;
    }
    ul {
      list-style: none;
    }
    li {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      padding-top: 10px;
    }
  }
`;

export default Info;

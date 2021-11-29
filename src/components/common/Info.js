import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import L from "../../locale/language.json";
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";

const Info = () => {
  const lan = useSelector((state) => state.allLanguage);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Wrapper>
      <FlexItem>
        <h1>Dems</h1>
        <p>{L.footer.name[lan]}</p>
      </FlexItem>
      <FlexItem>
        <h2>{L.footer.how[lan]}</h2>
        <div className="line" />
        <ul>
          <li>
            <a href="#">{L.footer.sel[lan]}</a>
          </li>
          <li>
            <a href="#">{L.footer.buy[lan]}</a>
          </li>
          <li>
            <a href="#">{L.footer.banner[lan]}</a>
          </li>
          <li>
            <a href="#">{L.footer.pro[lan]}</a>
          </li>
        </ul>
      </FlexItem>
      <FlexItem>
        <h2>{L.footer.infor[lan]}</h2>
        <div className="line" />
        <ul>
          <li>
            <button
              style={{
                backgroundColor: "black",
                border: "none",
                outline: "none",
                color: " #999999",
              }}
              type="submit"
              onClick={handleClick({
                vertical: "bottom",
                horizontal: "center",
              })}
            >
              {L.footer.com[lan]}
            </button>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/STRONG+HOUSES/@41.2862581,69.204627,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b2703dc8daf:0x7a1c70c13181c53b!8m2!3d41.2862581!4d69.2068157">
              {L.footer.infor[lan]}
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="call center : +998 90 337 37 59 : +998 97 337 37 59 "
            key={vertical + horizontal}
          />
        </div>
      </FlexItem>
      <FlexItem>
        <h2>{L.footer.itm[lan]}</h2>
        <div className="line" />
        <ul>
          <li>
            <Link to="/failFooter">
            <a href="#">{L.footer.liv[lan]}</a>
            </Link>
          </li>
          <li>
            <a href="#">{L.footer.ter[lan]}</a>
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
  padding-bottom: 50px;
  h1 {
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 40px;
    font-family: "Quicksand", sans-serif;
  }
  h2 {
    font-family: "Quicksand", sans-serif;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: normal;
    padding-bottom: 17px;
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
    padding-top: 19px;
  }
  a {
    text-decoration: none;
    color: #999999;
  }
  button {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
  }
`;

const FlexItem = styled.div`
  width: 20%;
  padding-right: 20px;
  margin-top: 71px;
  && > h1{
    height: 45px;
  }
  && > h2{
    height: 36px;
  }
  && > ul{
    li{
      button{
        text-align: inherit;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 40%;
    margin-top: 50px;
    text-align: center;

    h1 {
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 45px;
      line-height: 50px;
      font-family: "Quicksand", sans-serif;
      padding-bottom: 10px;
    }
    && > button {
      text-align: inherit;
    }
    h2 {
      font-family: "Quicksand", sans-serif;
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: normal;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 23px;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding-top: 12px;
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
    width: 40%;
    margin-top: 50px;
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
      line-height: normal;
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
  @media (max-width: 550px) {
    width: 40%;
    text-align: center;
    margin-top: 22px;

    h1 {
      color: white;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 30px;
      font-family: "Quicksand", sans-serif;
      padding-bottom: 0px;
      margin-top: 15px;
    }
    h2 {
      font-family: "Quicksand", sans-serif;
      color: white;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: normal;
      padding-bottom: 0px;
    }
    p {
      font-weight: 100;
      font-size: 13px;
      line-height: 10px;
      font-family: "Inter", sans-serif;
      color: #999999;
      margin-top: 30px;
      padding-top: 0px;
      line-height: 1.4;
    }
    ul {
      list-style: none;
      margin-top: 40px;

    }
    li {
      font-weight: 100;
      font-size: 13px;
      line-height: 10px;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding-top: 0px;
      line-height: 1.4;
    }
    button {
      font-weight: 100;
      font-size: 13px;
      line-height: 10px;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding-top: 0px;
      line-height: 1.4;
      /* margin-top: 25px; */
  }
  }
`;

export default Info;

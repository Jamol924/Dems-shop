import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const Info = ({ dataInfo }) => {
  console.log("DataInfo:", dataInfo);

  return (
    <>
      <Wrapper>
        <StyledText>{dataInfo.description}</StyledText>
        <div style={{ marginLeft: 30 }}>
          <div>
            <h1>Overview</h1>
          </div>
          <div className="line" />
          <StyledInfo>
            <h2>
              Condition: <span>{dataInfo.condition}</span>
            </h2>
            <h2>
              Item Type: <span>{dataInfo.subtype}</span>
            </h2>
          </StyledInfo>
          <div>
            <List>
              <div>
                <li>
                  <FontAwesomeIcon icon={faEye} />
                  <a href="#">{dataInfo.city_name}</a>
                </li>
              </div>
              <div>
                <li>
                  <FontAwesomeIcon icon={faHeart} />
                  <a href="#">{dataInfo.color}</a>
                </li>
              </div>
              <div>
                <li>
                  <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
                  <a href="#"> {dataInfo.city_name}</a>
                </li>
              </div>
            </List>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  background: white;
  padding-top: 76px;
  display: flex;
  h1 {
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
  }
  span {
    color: #7e7e7e;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    font-size: 13px;
    line-height: 15px;
    font-weight: 800px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
  }
  ul {
    list-style: none;
  }
  li {
    border-bottom: 1px solid #dfdfdf;
  }
  a {
    text-decoration: none;
    font-size: 13px;
    line-height: 15px;
    font-weight: normal;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    color: #5c5c5c;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  div.line {
    width: 40px;
    height: 5px;
    background: #f85c70;
    margin: 20px 0;
  }
`;

const StyledText = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  font-family: "Inter", sans-serif;
  color: #6c6c6c;
  width: 45%;
`;

const StyledInfo = styled.div`
  border-bottom: 1px solid #dfdfdf;
`;

const List = styled.ul`
  padding: 0;

  li {
    margin: 20px 0;
    margin-left: 20px;
  }
`;

export default Info;

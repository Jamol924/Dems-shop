import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <Wrapper>
      <StyledText>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </StyledText>
      <div style={{ marginLeft: 30 }}>
        <div>
          <h1>Overview</h1>
        </div>
        <div className="line" />
        <StyledInfo>
          <h2>
            Condition: <span>New</span>
          </h2>
          <h2>
            Item Type: <span>Heating / cooling / AC</span>
          </h2>
        </StyledInfo>
        <div>
          <List>
            <div>
              <li>
                <FontAwesomeIcon icon={faEye} />
                <a href="#"> 183 views</a>
              </li>
            </div>
            <div>
              <li>
                <FontAwesomeIcon icon={faHeart} />
                <a href="#"> Add to Favorites</a>
              </li>
            </div>
            <div>
              <li>
                <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
                <a href="#"> Report Abuse</a>
              </li>
            </div>
          </List>
        </div>
      </div>
    </Wrapper>
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

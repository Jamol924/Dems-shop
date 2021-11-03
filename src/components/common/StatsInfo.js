import React, {useState, useEffect } from "react";
import styled from "styled-components";
import photo from "../../assets/photo.png";
import medal from "../../assets/medal.svg";
import people from "../../assets/people.svg";
import shield from "../../assets/shield-security.svg";
import axios from "axios";

const StatsInfo = () => {

  const [counter, setCounter] = useState([]);
  const productFetch = async () => {
    await axios
      .post("http://dems.inone.uz/api/ad/latest/get-pagin", {
        limit: 10,
        page: 1,
      })
      .then((res) => {
        setCounter(res.data.data.total)
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    productFetch();
  }, []);


  return (
    <Wrapper>
      <Content>
        <div className="first">
          <img src={medal} alt="medal" />
          <div>
            <StyledH>{counter}+</StyledH>
            <p>Published Ads</p>
          </div>
        </div>
        <div className="first">
          <img src={people} alt="people" />
          <div>
            <StyledH>3256+</StyledH>
            <p>Registered Users</p>
          </div>
        </div>
        <div className="first">
          <img src={shield} alt="shield" />
          <div>
            <StyledH>2000+</StyledH>
            <p>Verified Users</p>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url(${photo}) no-repeat center center/cover;
  background-attachment: fixed;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  margin-bottom: 43px;
  @media (max-width: 800px) {
    padding: 10px 0;
  }

  div.first {
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      padding: 10px;
      margin-left: 20px;
    }
  }
  p {
    padding-top: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    font-family: "Inter", sans-serif;
    color: #ffffff;
  }
`;

const StyledH = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  img {
    color: blue;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

export default StatsInfo;

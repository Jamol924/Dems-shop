import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoImages from "../../../assets/NoImages.jpg";
import { CardImgSvg } from "../../../icon/CardSvg";
import { Row, Wrapper } from "../home/Ads";
import Navbar from "./Navbar";
import { BackMyProfl } from "../../../components/Back";
import {
  SimpleTooltipsAdd,
  SimpleTooltipsCreat,
  SimpleTooltipsDelit,
} from "../../../components/common/Toltip.js";
import {
  RowColumn,
  ImgDi,
  CardMenu,
  CardTitle,
  CardPrice,
} from "../../../components/common/MaterialComponent/Adsjr";




function MyAdss() {
  const [data, setData] = useState([]);
  const handleData = () => {
    axios
      .post(
        "http://dems.inone.uz/api/ad/my-ads",
        {
          limit: 10,
          page: 1,
          search: "",
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => {
        setData(res.data.data.data);
      });
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <Navbar />
      <BackMyProfl style={{marginTop:"-110px"}} />
      <Wrapper>
        <Row>
          {data.map((elm) => (
            <RowColumn key={elm._id}>
              <ImgDi>
                <CardImgSvg />

                {elm.images.length >= 1 ? (
                  <img src={`http://dems.inone.uz/api${elm.images[0]}`} />
                ) : (
                  <img src={NoImages} alt="No images" />
                )}
              </ImgDi>
              <CardMenu>
                <CardTitle>{elm.title}</CardTitle>
                <CardPrice>{elm.price}</CardPrice>
                <CardIcon>
                  <SimpleTooltipsAdd />
                  <SimpleTooltipsDelit />
                  <Link to={`/${elm._id}`}>
                    <SimpleTooltipsCreat />
                  </Link>
                </CardIcon>
              </CardMenu>
            </RowColumn>
          ))}
        </Row>
      </Wrapper>
    </>
  );
}

export default MyAdss;

const CardIcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  &:nth-child(3){
    color: white;
  }
`;

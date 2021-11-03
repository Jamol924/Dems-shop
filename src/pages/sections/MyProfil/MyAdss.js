import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoImages from "../../../assets/NoImages.jpg";
import {
  CardContactSvg,
  CardImgSvg,
  CardLocationSvg,
  CardTissotSvg,
} from "../../../icon/CardSvg";
import { Row } from "../home/Ads";
import Navbar from "./Navbar";
import { BackMyProfl } from "../../../components/Back";
import {
  SimpleTooltipsAdd,
  SimpleTooltipsCreat,
  SimpleTooltipsDelit,
} from "../../../components/common/Toltip.js";
import {
  ImgDi,
  CardMenu,
  CardTitle,
  CardPrice,
  CardW,
  WIcon,
  WTitle,
  CardName,
  NameIcon,
  NameTitle,
  CardLocation,
  LocationIcon,
  LocationTitle,
} from "../../../components/common/MaterialComponent/Adsjr";

function MyAdss() {
  const [data, setData] = useState([]);

  const handleDelete = (dataId) => {
    const counter = data.filter((fil) => fil._id !== dataId);
    setData(counter)


    axios.post("http://dems.inone.uz/api/ad/delete",{
      _id:dataId,
    },
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token")
        )}`,
      },
    }
    ).then((res) => console.log(res))
  };

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
      <BackMyProfl style={{ marginTop: "-110px" }} />
      <Row>
        {data.map((dat) => (
          <Wrapper key={dat._id}>
            <ImgDi>
              <CardImgSvg />
              {dat.images.length >= 1 ? (
                <img
                  src={`http://dems.inone.uz/api${dat.images[0]}`}
                  alt="phone"
                />
              ) : (
                <img src={NoImages} alt="No images" />
              )}
            </ImgDi>
            <CardMenu>
              <CardTitle >
                {dat.title}
              </CardTitle>
              <CardW>
                <WIcon>
                  <CardContactSvg />
                </WIcon>
                <WTitle>{dat.description}</WTitle>
              </CardW>
              <CardName>
                <NameIcon>
                  <CardTissotSvg />
                </NameIcon>
                <NameTitle>{dat.year_house_build}</NameTitle>
              </CardName>
              <CardLocation>
                <LocationIcon>
                  <CardLocationSvg />
                </LocationIcon>
                <LocationTitle>{dat.region_name}</LocationTitle>
              </CardLocation>
              <CardPrice>${dat.price}</CardPrice>
            </CardMenu>
            <CardIcon>
              <SimpleTooltipsAdd />
              <SimpleTooltipsDelit delite={handleDelete} id={dat._id} />
              <Link to={`/${dat._id}`}>
                <SimpleTooltipsCreat />
              </Link>
            </CardIcon>
          </Wrapper>
        ))}
      </Row>
    </>
  );
}

export default MyAdss;

const Wrapper = styled.div`
  margin-left: 20px;
  width: 235px;
  height: 370px;
  cursor: pointer;
  border: 1px solid gray;
  margin-bottom: 25px;
  background: #ffffff;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  ul {
    list-style: none;
  }
`;

const CardIcon = styled.div`
  margin: 0px auto;
  margin-top: -20px;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-between;
  &:nth-child(3) {
    color: white;
  }
`;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoImages from "../../../assets/NoImages.jpg";
import { Row } from "../home/Ads";
import { BackMyProfl } from "../../../components/Back";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { carsEliment } from "../../../redux/active/productActions";
import L from "../../../locale/language.json";
import {
  CardContactSvg,
  CardImgSvg,
  CardLocationSvg,
  CardTissotSvg,
} from "../../../icon/CardSvg";
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
import PaginationLink from "../../../components/pagenaton/Paginat";
import MinNav from "../../../components/common/MineNavbar/MinNav";

function MyAdss() {
  const lan = useSelector((state) => state.allLanguage);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const [pag, setPag] = useState(1);
  const [numberOf, setNumberOf] = useState();

  console.log(numberOf);

  const handleDelete = (dataId) => {
    const counter = data.filter((fil) => fil._id !== dataId);
    setData(counter);

    axios
      .post(
        "http://dems.inone.uz/api/ad/delete",
        {
          _id: dataId,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const handleData = () => {
    axios
      .post(
        "http://dems.inone.uz/api/ad/my-ads",
        {
          limit: 10,
          page: pag,
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
        setNumberOf(res.data.data.total);
        dispatch(carsEliment(res.data.data.data));
        setData(res.data.data.data);
      });
  };

  useEffect(() => {
    handleData();
  }, [pag]);
  function day(data) {
    if (data == null) {
      return null;
    }
    let d = new Date(data).toISOString().slice(0, -14);
    return d;
  }
  return (
    <Main>
      <Navbar />
      <MinNav />
      <BackMyProfl />
      <Bloc>{L.navb.ad[lan]}</Bloc>
      <Row>
        {data.map((dat) => (
          <Wrapper key={dat._id}>
            <ImgDi>
              {dat.state === "active" ? (
                <StyledBut style={{ backgroundColor: "#2a3a96" }}>
                  active
                </StyledBut>
              ) : (
                <StyledBut style={{ backgroundColor: "white", color:"#2a3a96" }}>
                  pending
                </StyledBut>
              )}

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
              <CardTitle>{dat.title}</CardTitle>
              <CardW>
                <WIcon>
                  <CardContactSvg />
                </WIcon>
                <WTitle>{dat.user_phone_number}</WTitle>
              </CardW>
              {dat.state === "active" ? (
                <>
                  <CardName>
                    <NameIcon>
                      <CardTissotSvg />
                    </NameIcon>
                    <NameTitle>{day(dat.expired_at)}</NameTitle>
                  </CardName>
                </>
              ) : (
                <></>
              )}
              <CardLocation>
                <LocationIcon>
                  <CardLocationSvg />
                </LocationIcon>
                <LocationTitle>{dat.region_name}</LocationTitle>
              </CardLocation>
              <CardPrice>${dat.price}</CardPrice>
            </CardMenu>
            <CardIcon>
              <Link to={`/card/${dat._id}`}>
                <SimpleTooltipsAdd />
              </Link>
              <SimpleTooltipsDelit delite={handleDelete} id={dat._id} />
              <Link to={`/${dat._id}`}>
                <SimpleTooltipsCreat />
              </Link>
            </CardIcon>
          </Wrapper>
        ))}
      </Row>
      <PaginationLink setPag={setPag} pagNumber={numberOf} />
    </Main>
  );
}

export default MyAdss;

const Main = styled.div`
  @media (max-width: 550px) {
    margin-bottom: 120px;
  }
`;
const Wrapper = styled.div`
  margin-left: 20px;
  width: 235px;
  height: 380px;
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
  @media (max-width: 550px) {
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 170px;
    height: 290px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  @media (max-width: 350px) {
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 140px;
    height: 270px;
    margin-bottom: 10px;
    border-radius: 10px;
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
  @media (max-width: 550px) {
    width: 90%;
    margin-top: -10px;
    margin-bottom: 2px;
    font-size: 10px;
  }
`;
const Bloc = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 5px;
    font-family: "Quicksand", sans-serif;
    margin-top: 50px;
    margin-bottom: 43px;
  }
  @media (max-width: 350px) {
    font-size: 20px;
    line-height: 12px;
    text-align: center;
    padding-bottom: 4px;
    font-family: "Quicksand", sans-serif;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;
const StyledBut = styled.span`
  position: absolute;
  top: -1px;
  left: -40px;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  color: white;
  transform: rotate(-45deg);
  font-weight: 600;
  font-size: 13px;
`;

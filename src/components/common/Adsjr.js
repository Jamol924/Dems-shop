import React from "react";
import NoImages from "../../assets/NoImages.jpg"
import {
  Wrapper,
  ImgDi,
  CardMenu,
  CardLocation,
  CardTitle,
  CardPrice,
  CardW,
  WTitle,
  CardName,
  NameIcon,
  NameTitle,
  LocationIcon,
  LocationTitle,
  WIcon,
} from "./MaterialComponent/Adsjr";
import { Link } from "react-router-dom";
import {
  CardContactSvg,
  CardImgSvg,
  CardLocationSvg,
  CardTissotSvg,
} from "../../icon/CardSvg";

const Adsjr = ({ datas }) => {
  return (
    <>
      {datas.map((dat) => (
        <Link to={`/${dat._id}`}>
          <Wrapper>
            <ImgDi>
              <CardImgSvg />
              {dat.images.length >= 1 ? (
                <img
                  src={`http://dems.inone.uz/api${dat.images[0]}`}
                  alt="phone"
                />
              ) : (
                <img src = {NoImages}  alt ="No images"/>
              )}
            </ImgDi>
            <CardMenu>
              <CardTitle>{dat.title}</CardTitle>
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
          </Wrapper>
        </Link>
      ))}
    </>
  );
};

export default Adsjr;

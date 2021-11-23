import React from "react";
import NoImages from "../../assets/NoImages.jpg";
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
  CardIconSvg, 
  CardLocationSvg,
  CardTissotSvg,
} from "../../icon/CardSvg";

function day(data) {
  if (data == null) {
    return null;
  }
  let d = new Date(data).toISOString().slice(0,-14);
  return d;
}

const Adsjr = ({ datas }) => {
  return (
    <>
      {datas.map((dat) => (
        <Link to={`/${dat._id}`}>
          <Wrapper>
              <CardIconSvg /> 
            <ImgDi>
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
              <CardName>
                <NameIcon>
                  <CardTissotSvg />
                </NameIcon>
                <NameTitle>{day(dat.expired_at)}</NameTitle>
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

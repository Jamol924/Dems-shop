import React from "react";
import NoImages from "../../assets/NoImages.jpg";
import { useSelector } from "react-redux";
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

const FatureTovar = () => {
    const produc = useSelector((state) => state.allProduc.products);
  return (
    <>
      {produc?.map((elm) => (
        <Link to={`/${elm._id}`}>
          
          <Wrapper>
              {elm.state === "active" ? <CardImgSvg /> : <> </>}
            <ImgDi>
              {elm.images.length >= 1 ? (
                <img
                  src={`http://dems.inone.uz/api${elm.images[0]}`}
                  alt="phone"
                />
              ) : (
                <img src={NoImages} alt="No images" />
              )}
            </ImgDi>
            <CardMenu>
              <CardTitle>{elm.title}</CardTitle>
              <CardW>
                <WIcon>
                  <CardContactSvg />
                </WIcon>
                <WTitle>{elm.user_phone_number}</WTitle>
              </CardW>
              <CardName>
                <NameIcon>
                  <CardTissotSvg />
                </NameIcon>
                <NameTitle>{day(elm.expired_at)}</NameTitle>
              </CardName>
              <CardLocation>
                <LocationIcon>
                  <CardLocationSvg />
                </LocationIcon>
                <LocationTitle>{elm.region_name}</LocationTitle>
              </CardLocation>
              <CardPrice>${elm.price}</CardPrice>
            </CardMenu>
          </Wrapper>
        </Link>
      ))}
    </>
  );
};

export default FatureTovar;

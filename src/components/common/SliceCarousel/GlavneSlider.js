import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import L from "../../../locale/language.json"

export const GlavneSlider = () => {
  const lon = useSelector((state) => state.allLanguage);
  const [slide, setSlide] = useState([]);
  const productFetch = async () => {
    const instance = axios.create({
      baseURL: "http://dems.inone.uz/api/",
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    await instance
      .post("banner/get", {})
      .then((res) => {
        setSlide(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  useEffect(() => {
    productFetch();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Link style={{ color: "black" }} to="/searchCard">
        <StyledInput>
          <span>
            <SearchIcon />
          </span>
          <input placeholder={L.poisk[lon]} />
        </StyledInput>
      </Link>
      <StyledSlider>
        <Slider {...settings}>
          {slide.map((slid) => (
            <CarouselApp>
              <img src={`http://dems.inone.uz/api/${slid.image}`} />
            </CarouselApp>
          ))}
        </Slider>
      </StyledSlider>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
 display: none;
 @media (max-width: 700px) {
    display: block;
  }
`;
export const StyledInput = styled.div`
  width: 90%;
  height: 40px;
  display: none;
  display: flex;
  align-items: center;
  margin: 30px auto;
  border-radius: 10px;
  border: 1px solid #ccc;
  span {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  && > input {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
  }
`;
export const StyledSlider = styled.div`
  max-width: 90%;
  height: 260px;
  display: flex;
  display: none;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 350px;
    display: block;
  }
  @media (max-width: 550px) {
    height: 260px;
    display: block;
  }
`;
export const CarouselApp = styled.div`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 550px) {
    height: 210px;
  }
`;

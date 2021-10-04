import React from "react";
import styled from "styled-components";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import Slider from "react-slick";


const Image = ({dataProduct}) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 2000,
  };



  return (
    <Wrapper>
      <div className="main-img">
        <Slider {...settings}>
          <div >
            <img
              style={{ objectFit: "cover" }}
              src={dataProduct.images}
              width="712px"
              height="400px"
              alt="main"
            />
          </div>
      </Slider>
      </div>

      <div className="other-img">
        <div >
          <img
            style={{ objectFit: "cover" }}
            src={dataProduct.images}
            width="138px"
            height="80px"
            alt="other"
          />
        </div>
        <div >
          <img
            style={{ objectFit: "cover" }}
            src={dataProduct.image}
            width="138px"
            height="80px"
            alt="other"
          />
        </div>
        <div >
          <img
            style={{ objectFit: "cover" }}
            src={dataProduct.image}
            width="138px"
            height="80px"
            alt="other"
          />
        </div>
        <div >
          <img
            style={{ objectFit: "cover" }}
            src={dataProduct.image}
            width="138px"
            height="80px"
            alt="other"
          />
        </div>
      </div>
      <StyledInfo>
        <div>
          <img src={clock} /> <p> {dataProduct.feature_expired_at} </p>
        </div>
        <div>
          <img src={location} /> <p>{dataProduct.located_near}</p>
        </div>
      </StyledInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  padding-top: 21px;
  padding-left: 26px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 700px;

  div.main-img {
    /* overflow: hidden; */
    width: 100%;
    & > img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.4s ease;
      &:hover {
        transform: scale(1.5);
      }
    }
  }

  div.other-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 11px;
    width: 100%;

    div {
      margin: 5px;
      flex: 1;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      img {
        width: 100%;
      }
    }
  }
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #949494;
    font-family: "Roboto", sans-serif;
    margin: 10px;
    align-items: center;

    p {
      display: inline-block;
    }
  }
`;

export default Image;

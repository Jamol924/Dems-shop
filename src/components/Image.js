import React, { useEffect } from "react";
import styled from "styled-components";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import Slider from "react-slick";
import { setProducts } from "../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";


const Image = () => {
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

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const getFetch = async () => {
    const resp = await fetch("http://fakestoreapi.com/products");
    const jsonProduct = await resp.json();
    dispatch(setProducts(jsonProduct));
  };

  useEffect(() => {
    getFetch();
  }, []);

  const productList = products.map((product) => {
    const { image, id, tatle } = product;
    return (
      <div key={id}>
        <img
          style={{ objectFit: "cover" }}
          src={image}
          width="712px"
          height="400px"
          alt="main"
        />
      </div>
    );
  });
  const productList_mini = products.map((product) => {
    const { image, id } = product;
    return (
      <div key={id}>
        <img
          style={{ objectFit: "cover" }}
          src={image}
          width="138px"
          height="80px"
          alt="other"
        />
      </div>
    );
  });

  return (
    <Wrapper>
      <div className="main-img">
        <Slider {...settings}>{productList}</Slider>
      </div>

      <div className="other-img">{productList_mini}</div>
      <StyledInfo>
        <div>
          <img src={clock} /> <p>July 18,2021 12:20 pm</p>
        </div>
        <div>
          <img src={location} /> <p>Beshariq shahar, Farg’ona viloyati</p>
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

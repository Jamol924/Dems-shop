import React from "react";
import chart from "./../../../assets/presention-chart.svg";
import watch from "./../../../assets/watch.svg";
import car from "./../../../assets/car.svg";
import house from "./../../../assets/house.svg";
import bank from "./../../../assets/bank.svg";
import styled from "styled-components";

// import {Swiper, SwiperSlider } from 'swiper/react';
// import 'swiper/swiper.scss';

const Kategore = () => {
  const data = [
    { img: chart, title: "Buisness & Industry" },
    { img: bank, title: "Education" },
    { img: watch, title: "Electronics" },
    { img: house, title: "Property" },
    { img: car, title: "Car & Automobiles" },
  ];
  return (
    <div>
      {/* <Wrapper>
        <CardTitle>Popular Categories</CardTitle>
          <CardMenu>
            {data.map((dat) => (
              <Card>
                <CardIcon>{dat.img}</CardIcon>
                <CardH1>{dat.title}</CardH1>
                <CardP>dfdf</CardP>
              </Card>
            ))}
          </CardMenu>
      </Wrapper> */}
      {/* <Swiper
      spaceBetween= {50}
      slidesPerView = {3}
      >
          <SwiperSlider>cat 1</SwiperSlider>
          <SwiperSlider>cat 1</SwiperSlider>
          <SwiperSlider>cat 1</SwiperSlider>
          <SwiperSlider>cat 1</SwiperSlider>
          <SwiperSlider>cat 1</SwiperSlider>

      </Swiper> */}
    </div>
  );
};
export default Kategore;

const Wrapper = styled.div`
  width: 100%;
  height: 585px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  margin-top: 52px;
  color: #2a2a2a;
`;
const CardMenu = styled.div`
  width: 1275px;
  height: auto;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 44px;
  white-space: nowrap;
`;
const Card = styled.div`
  width: 235px;
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
`;
const CardIcon = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f85c70;
`;
const CardH1 = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`;
const CardP = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #999999;
`;

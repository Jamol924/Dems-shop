import React from "react";
import styled from "styled-components";
import { Wrapper, PStyled } from "../Features";

function HomeFeater({ dataCard }) {
  return (
    <div>
      <Wrapper>
        <div className="title">
          <h1>Features:</h1>
          <div className="line" />
        </div>
        <div className="items">
          <PStyled>
            <div>
              <p>продажа недвижимости</p>
              <p>{dataCard.subtype}</p>
            </div>
            <div>
              <p>Главнай</p>
              <p>{dataCard.home_plan_name}</p>
            </div>
            <div>
              <p>Высота потолков (m)</p>
              <p>{dataCard.celling_height}</p>
            </div>
            <div>
              <p>Количества комнат*</p>
              <p>{dataCard.count_room} </p>
            </div>
            <div>
              <p>Размер</p>
              <p>{dataCard.size}</p>
            </div>
            <div>
              <p>Доступный (m 2)</p>
              <p>{dataCard.available_size}</p>
            </div>
            <div>
              <p>Кондитион </p>
              <p>{dataCard.situation}</p>
            </div>
            <div>
              <p>Год постройка/сдачи </p>
              <p>{dataCard.year_house_build}</p>
            </div>
            <div>
              <p>Конструктион </p>
              <p>{dataCard.construction}</p>
            </div>
            <div>
              <p>Этаж </p>
              <p>{dataCard.floor}</p>
            </div>
            <div>
              <p>Этажность дома*</p>
              <p>{dataCard.floor_of_house}</p>
            </div>
            <div>
              <p>расположен рядом</p>
              <p>{dataCard.located_near}</p>
            </div>
            <div>
              <p>Место нахождения </p>
              <p>
                {dataCard.region_name} {dataCard.city_name}
              </p>
            </div>
          </PStyled>
        </div>
      </Wrapper>
    </div>
  );
}

export default HomeFeater;

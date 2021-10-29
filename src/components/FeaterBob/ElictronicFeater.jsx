import React from 'react';
import styled from "styled-components"
import {Wrapper, PStyled} from "../Features"

function ElictronicFeater({dataCard}) {
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
                  <p>Электронный тип</p>
                  <p>{dataCard.brand_name}</p>
                </div>
                <div>
                  <p>Модель </p>
                  <p>{dataCard.electronic_model_id}</p>
                </div>
                <div>
                  <p>Кондитион </p>
                  <p>{dataCard.situation}</p>
                </div>
                <div>
                  <p>Место нахождения*</p>
                  <p>
                    {dataCard.region_name} {dataCard.city_name}
                  </p>
                </div>
              </PStyled>
            </div>
          </Wrapper>
        </div>
    )
}

export default ElictronicFeater



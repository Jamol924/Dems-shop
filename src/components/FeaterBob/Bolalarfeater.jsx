import React from 'react';
import styled from "styled-components"
import {Wrapper, PStyled} from "../Features"

function BolalatFeater({dataCard}) {
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
                  <p>тип*</p>
                  <p>{dataCard.subtype}</p>
                </div>
                <div>
                  <p>Кондитион </p>
                  <p>{dataCard.currency}</p>
                </div>
                <div>
                  <p>currency </p>
                  <p>{dataCard.size}</p>
                </div>
                <div>
                  <p>Location*</p>
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

export default BolalatFeater



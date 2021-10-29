import React from 'react';
import styled from "styled-components"
import {Wrapper, PStyled} from "../Features"

function BusinesFeater({dataCard}) {
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
                  <p>Brand*</p>
                  <p>{dataCard.bussiness_service}</p>
                </div>
                <div>
                  <p>Model</p>
                  <p>{dataCard.currency}</p>
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

export default BusinesFeater



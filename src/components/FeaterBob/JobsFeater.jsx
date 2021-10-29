import React from 'react';
import styled from "styled-components"
import {Wrapper, PStyled} from "../Features"

function JobsFeater({dataCard}) {
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
                  <p>{dataCard.brand_name}</p>
                </div>
                <div>
                  <p>Model</p>
                  <p>{dataCard.model_name}</p>
                </div>
                <div>
                  <p>Fuel*</p>
                  <p>{dataCard.year_out}</p>
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

export default JobsFeater



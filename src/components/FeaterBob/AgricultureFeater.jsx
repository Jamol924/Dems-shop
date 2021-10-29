import React from 'react';
import {Wrapper, PStyled} from "../Features"

function AgricultureFeater({dataCard}) {
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
                  <p>Model</p>
                  <p>{dataCard.agriculture}</p>
                </div>
                <div>
                  <p>Fuel*</p>
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

export default AgricultureFeater



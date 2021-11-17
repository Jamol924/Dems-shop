import React from 'react';
import {Wrapper, PStyled} from "../Features"
import {useSelector} from "react-redux";
import L from "../../locale/language.json"

function AgricultureFeater({dataCard}) {
  const lan = useSelector(state => state.allLanguage)  
    return (
        <div>
            <Wrapper>
            <div className="title">
              <h1>{L.item.fea[lan]}</h1>
              <div className="line" />
            </div>
            <div className="items">
              <PStyled>
                <div>
                  <p>{L.item.mev[lan]}</p>
                  <p>{dataCard.agriculture}</p>
                </div>
                <div>
                  <p>{L.item.loc[lan]}*</p>
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



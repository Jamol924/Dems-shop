import React from 'react';
import {Wrapper, PStyled} from "../Features"
import {useSelector} from "react-redux";
import L from "../../locale/language.json"

function CarsFeater({dataCard}) {
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
                  <p>{L.item.bran[lan]}</p>
                  <p>{dataCard.brand_name}</p>
                </div>
                <div>
                  <p>{L.item.mod[lan]}</p>
                  <p>{dataCard.model_name}</p>
                </div>
                <div>
                  <p>{L.item.god[lan]}*</p>
                  <p>{dataCard.year_out}</p>
                </div>
                <div>
                  <p>{L.item.fuel[lan]}*</p>
                  <p>{dataCard.fuel}</p>
                </div>
                <div>
                  <p>{L.item.loc[lan]}</p>
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

export default CarsFeater



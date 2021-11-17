import React from 'react';
import {useSelector} from "react-redux";
import L from "../../locale/language.json"
import {Wrapper, PStyled} from "../Features"

function BusinesFeater({dataCard}) {
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
                  <p>{L.item.ser[lan]}</p>
                  <p>{dataCard.business_service}</p>
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

export default BusinesFeater



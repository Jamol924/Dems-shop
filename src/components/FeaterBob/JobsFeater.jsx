import React from 'react';
import {useSelector} from "react-redux";
import L from "../../locale/language.json"
import {Wrapper, PStyled} from "../Features"

function JobsFeater({dataCard}) {
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
                  <p>{L.item.jobs[lan]}*</p>
                  <p>{dataCard.jobs}</p>
                </div>
                <div>
                  <p>{L.item.mist[lan]}*</p>
                  <p>{dataCard.mission_type}</p>
                </div>
                <div>
                  <p>{L.item.bandlik[lan]}*</p>
                  <p>{dataCard.employment_type}</p>
                </div>
                <div>
                  <p>{L.item.jobt[lan]}*</p>
                  <p>{dataCard.job_type}</p>
                </div>
                <div>
                  <p>{L.item.from[lan]}*</p>
                  <p>{dataCard.salary_from}</p>
                </div>
                <div>
                  <p>{L.item.to[lan]}*</p>
                  <p>{dataCard.salary_to}</p>
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

export default JobsFeater



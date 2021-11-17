import React from "react";
import {useSelector} from "react-redux";
import L from "../../locale/language.json"
import { Wrapper, PStyled } from "../Features";

function HomeFeater({ dataCard }) {
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
              <p>{L.item.tip[lan]}</p>
              <p>{dataCard.subtype}</p>
            </div>
            {/* <div>
              <p>{L.item.mulk[lan]}</p>
              <p>{dataCard.sell_property}</p>
            </div> */}
            <div>
              <p>{L.item.asosiy[lan]}</p>
              <p>{dataCard.home_plan_name}</p>
            </div>
            <div>
              <p>{L.item.vpotol[lan]}</p>
              <p>{dataCard.celling_height}</p>
            </div>
            <div>
              <p>{L.item.komnat[lan]}</p>
              <p>{dataCard.count_room} </p>
            </div>
            <div>
              <p>{L.item.siz[lan]}</p>
              <p>{dataCard.size}</p>
            </div>
            <div>
              <p>{L.item.Доступный[lan]}</p>
              <p>{dataCard.available_size}</p>
            </div>
            <div>
              <p>{L.item.godt[lan]}</p>
              <p>{dataCard.year_house_build}</p>
            </div>
            <div>
              <p>{L.item.sharoitlar[lan]}*</p>
              <p>{dataCard.appliance_names}</p>
            </div>
            <div>
              <p>{L.item.qav[lan]} </p>
              <p>{dataCard.floor}</p>
            </div>
            <div>
              <p>{L.item.qavb[lan]}*</p>
              <p>{dataCard.floor_of_house}</p>
            </div>
            <div>
              <p>{L.item.kons[lan]} </p>
              <p>{dataCard.construction}</p>
            </div>
            <div>
              <p>{L.item.map[lan]} </p>
              <p>{dataCard.located_near}</p>
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
  );
}

export default HomeFeater;

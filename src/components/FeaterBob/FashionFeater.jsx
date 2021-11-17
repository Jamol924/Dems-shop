import React from "react";
import { useSelector } from "react-redux";
import L from "../../locale/language.json";
import { Wrapper, PStyled } from "../Features";

function FashionFeater({ dataCard }) {
  const lan = useSelector((state) => state.allLanguage);
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
            {dataCard.subtype === "beauty-and-health" ? (
              <div>
                <p>{L.item.btype[lan]}</p>
                <p>{dataCard.beauty_type}</p>
              </div>
            ) : dataCard.subtype === "clothes" ? (
              <> </>
            ) : dataCard.subtype === "watches" ? (
              <div>
                <p>{L.item.soat[lan]}</p>
                <p>{dataCard.watch_model_name}</p>
              </div>
            ) : (
              <div>
                <p>{L.item.acs[lan]}</p>
                <p>{dataCard.accessories_type}</p>
              </div>
            )}

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
  );
}

export default FashionFeater;

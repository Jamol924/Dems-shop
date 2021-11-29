import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import L from "../locale/language.json"

import {
  Wrapper,
  StyledText,
  StyledInfo,
  TextArea,
  StyledGroup
} from "./MaterialComponent/info";

const Info = ({ dataInfo }) => {
  console.log("DataInfo:", dataInfo);

  const lan = useSelector(state => state.allLanguage)  
  return (
    <>
      <Wrapper>
        <TextArea>
          <div>
            <h1>{L.item.det[lan]}</h1>
          </div>
          <StyledText>{dataInfo.description}</StyledText>
        </TextArea>
        <StyledGroup >
          <div>
            <h1> {L.item.ovr[lan]}</h1>
          </div>
          <StyledInfo>
            {dataInfo.situation === null ? (<> </>):(
            <h2>
              {L.item.con[lan]} <span>{dataInfo.situation}</span>
            </h2> 
            )}
            <h2>
            {L.item.typ[lan]} <span>{dataInfo.type}</span>
            </h2>
            <h2>{L.item.kur[lan]} <span>{dataInfo.view_count}</span></h2>
          </StyledInfo>
        </StyledGroup>
      </Wrapper>
    </>
  );
};

export default Info;

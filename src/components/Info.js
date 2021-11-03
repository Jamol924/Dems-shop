import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import {
  Wrapper,
  StyledText,
  StyledInfo,
  List,
  TextArea
} from "./MaterialComponent/info";

const Info = ({ dataInfo }) => {
  console.log("DataInfo:", dataInfo);

  return (
    <>
      <Wrapper>
        <TextArea>
          <div>
            <h1>Detailed</h1>
          </div>
          <StyledText>{dataInfo.description}</StyledText>
        </TextArea>
        <div style={{ marginLeft: 30 }}>
          <div>
            <h1>Overview</h1>
          </div>
          <StyledInfo>
            <h2>
              Condition: <span>{dataInfo.condition}</span>
            </h2> 
            <h2>
              Item Type: <span>{dataInfo.type}</span>
            </h2>
          </StyledInfo>
          <div>
            <List>
              <div>
                  <FontAwesomeIcon icon={faEye} />
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
            </List>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Info;

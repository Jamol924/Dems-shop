import { Typography } from "@mui/material";
import styled from "styled-components";
import React, { useEffect } from "react";
import { BackAdminFile } from "../Back";
import Nav2 from "../Nav2";
import AddTaskIcon from "@mui/icons-material/AddTask";
import gif from "../../assets/gif/subscripe.gif"
import L from "../../locale/language.json"
import { useSelector } from "react-redux";

const OkFile = () => {

  const lan = useSelector((state) => state.allLanguage)

  return (
    <>
      <Nav2 />
      <BackAdminFile />
      <StyledColumn>
        <StyledFile>
          <StyledIcon>
            <AddTaskIcon sx={{fontSize:"90px", color:"#2a3a96"}} />
          </StyledIcon>
          <Typography variant="h5">{L.ok[lan]}</Typography>
        </StyledFile>
        <StyledFileMin>
            <img src={gif} />
          <Typography variant="h5">{L.ok[lan]}</Typography>
        </StyledFileMin>
      </StyledColumn>
    </>
  );
}

export default OkFile;

export const StyledColumn = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledIcon = styled.div`
  width: auto;
  height: auto;
  font-size: 40px;
`;
export const StyledFile = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid #ccc;
  box-shadow:1px 1px 6px #ccc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media(max-width:700px){
    display: none;
  } 

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
export const StyledFileMin = styled.div`
  display:none;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media(max-width:700px){
    display:block;
  align-items: center;
  justify-content: center;
  background-color: white;
  } 

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

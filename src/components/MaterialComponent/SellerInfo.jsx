import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  padding: 25px;
  background: white;
  div {
    display: flex;
    align-items: center;
  }
  
  h3 {
    margin-left: 9px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
  }
  p {
    margin-left: 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #606067;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }

`;

export const StyledBut = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledButton = styled(Button)`
  a{
      border:1px solid red
  }
`;
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function AddButton() {
  return (
    <>
      <Wrapper>
        <StyledButton1 sx={{color:"#757575" , borderRadius:"24px", marginRight:8 }}>kurib chiqish</StyledButton1>
        <StyledButton
          sx={{
              color: "white",
              borderRadius: "24px",
              backgroundColor: "#f85c70"
          }}
        >
          E'lon joylashtirish
        </StyledButton>
      </Wrapper>
    </>
  );
}

export default AddButton;

const Wrapper = styled.div`
  height: auto;
  padding: 40px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-end;
  @media(max-width:580px){
      flex-direction: column;
  }
`;
const StyledButton1 = styled(Button)`
    border-radius: 24px;
  @media(max-width:580px){
      margin-bottom: 10px;
  }
`;
export const StyledButton = styled(Button)`
  height: 45px;
  padding: 0px 30px;
  &.MuiButton-root{
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    padding: 0px 20px;
  }
  

  &.css-ssgngi-MuiButtonBase-root-MuiButton-root:hover {
    background-color: #f32e48;
  }
 
  
`;

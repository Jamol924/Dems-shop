import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Box from "@mui/material/Box";
import { InputLabel, Typography } from "@mui/material";
import DialogSelect from "../../../components/common/UiCategore";

function CategoreAdd() {
  return (
    <>
      <Wrapper>
        <Typography>Bizga e'loningiz xaqida gapirib bering</Typography>
        
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1,  mb:1 },
          }}
          noValidate
          autoComplete="off"
        >
          <InputLabel sx={{ mt: 1 }} htmlFor="input-with-icon-adornment">
            Sarlavxani kriting*
          </InputLabel>
          <StyledTextField
            id="filled-basic"
            label="Masalan, Iphone, Samsung"
            variant="filled"
          />
        </Box>
        <InputLabel sx={{ mt: 2, mb:1 }} htmlFor="input-with-icon-adornment">
            Bo'limni tanlang*
          </InputLabel>
        <DialogSelect />
      </Wrapper>
    </>
  );    
}

export default CategoreAdd;

const Wrapper = styled.div`
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
`;
const StyledTextField = styled(TextField)`
  width:50%;
@media (max-width:800px){
        width: 100%; 
    }
  .MuiInputLabel-root.Mui-focused{
    color: rgb(153, 149, 149);
  
  }
  .MuiFilledInput-underline:after{
    border-bottom:2px solid #f85c70; 
  }
`;

import { TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

function AdresAdd() {
  return (
    <>
      <Wrapper>
        <Typography>Aloqa uchun ma'lumotlar</Typography>
        <Typography
          sx={{
            mb: 1,
            mt: 3,
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: "Roboto",
          }}
          component="h7"
        >
          joylashuv*
        </Typography>
        <StyledTextField
            id="filled-basic"
            label="shaxar yoke pochta indeksi"
            variant="filled"
          />
        <Typography
          sx={{
            mb: 1,
            mt: 3,
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: "Roboto",
          }}
          component="h7"
        >
          murojat qiluvchi shaxs*
        </Typography>
        <StyledTextField
            id="filled-basic"
            label="Ismingiz"
            variant="filled"
          />
        <Typography
          sx={{
            mb: 1,
            mt: 3,
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: "Roboto",
          }}
          component="h7"
        >
          Email manzil
        </Typography>
        <StyledTextField
            id="filled-basic"
            label="jamol@gmail.com"
            variant="filled"
          />
        <Typography
          sx={{
            mb: 1,
            mt: 3,
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: "Roboto",
          }}
          component="h7"
        >
          telifon raqami
        </Typography>
        <StyledTextField
            id="filled-basic"
            label="+9989...."
            variant="filled"
          />
      </Wrapper>
    </>
  );
}

export default AdresAdd;

const Wrapper = styled.div`
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
`;
const StyledTextField = styled(TextField)`
    width: 40%;
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

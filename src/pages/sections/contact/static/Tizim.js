  import React, { useState, useEffect } from "react";
  import styled from "styled-components";
  import TextField from "@mui/material/TextField";
  import InputLabel from "@mui/material/InputLabel";
  import Button from "@mui/material/Button";
  import axios from "axios";
  import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
 


 export const Tizim = () => {

    const [data, setData] = useState({
      phone_number: "",
      otp: "",
    });
    const [step, setStep] = useState(0);
    const history = useHistory();

    const {enqueueSnackbar} = useSnackbar()
    const handleClickVariant = () => () => {
      enqueueSnackbar("Siz xato kiritdingiz!");
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const { phone_number, otp } = data;

      if (step === 0) {
        axios
          .post("http://dems.inone.uz/api/sign-in", {
            phone_number,
          })
          // .then(( ) =>  handleClickVariant() )
          .then(() => setStep(1))
          .catch(( ) => handleClickVariant );  
      } else {
        axios
          .post("http://dems.inone.uz/api/sign-verify", {
            phone_number,
            otp,
          })
          .then((dd) => {
            localStorage.setItem("token" , JSON.stringify(dd.data.data.token))
            history.push("/admen")
          })
          .catch((e) => console.log(e));
      }
    };

 


    return (
      <div>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <InputLabel sx={{ mt: 2 }} htmlFor="input-with-icon-adornment">
            Telifon raqamingizni kiriting
          </InputLabel>
          <StyledTextField
            success
            id="outlined-error"
            sx={{ marginTop: 1, marginBottom: 0 }}
            fullWidth
            onChange={ e => setData({...data, phone_number: e.target.value})}
            required
            variant="outlined"
            label="Telefon raqamingizni kiriting"
            type="number"
          />
          {step === 1 && (
            <StyledTextField
              sx={{ marginTop: 1, marginBottom: 0 }}
              fullWidth
              required
              onChange={ e => setData({...data, otp: e.target.value})}
              variant="outlined"
              label="Tasdiqlash kodini kiriting"
              type="password"
            />
          )}
          <StyledButton 
          type="submit"
          sx={{
            marginTop: 1,
            marginBottom: 4,
            letterSpacing: 2,
            fontWeight: 500,
            padding: 1.7,
            borderRadius: 2,
          }}
          // onClick={handleClickVariant("error")}
          fullWidth
          variant="contained"
          >Kirish</StyledButton>
        </form>
      </div>
    );
  }

  const StyledTextField = styled(TextField)`
  .MuiInputLabel-root.Mui-focused{
    color: rgb(153, 149, 149);
  }
     &&{
       .MuiInputBase-root.Mui-focused fieldset{
         border: 1px solid rgb(153, 149, 149);
       }
     }
  `
  const StyledButton = styled(Button)`
    && {
      background: #f85c70;

      &:hover {
        background: #f32e48;
      }
    }
  `;



    
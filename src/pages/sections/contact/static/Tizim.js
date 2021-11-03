import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import InputMask from "react-input-mask";
import { StyledButton } from "../../Admen/MaterialTovar/Tovar";
import { useDispatch, useSelector} from "react-redux";
import { countItem } from "../../../../redux/active/productActions";

export const Tizim = () => {
  const [counter, setCounter ] = useState(false);
  
  const dispatch = useDispatch();
  dispatch(countItem(counter));


  const [data, setData] = useState({
    phone_number: "",
    otp: "",
  });
  const [step, setStep] = useState(0);
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();
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
        .then(() => setStep(1))
        .catch(() => handleClickVariant);
    } else {
      axios
        .post("http://dems.inone.uz/api/sign-verify", {
          phone_number,
          otp,
        })
        .then((dd) => {
          setCounter(true);
          localStorage.setItem("token", JSON.stringify(dd.data.data.token));
          localStorage.setItem("user", JSON.stringify(dd.data.data));
          history.push("/admen");
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
        <StyledInputMask
          style={{marginBottom:0}}
          onChange={(e) => setData({ ...data, phone_number: e.target.value })}
          placeholder="+998 (__) ___-__-__"
          mask="+\9\9\8 (99) 999-99-99"
          required
        />
        {step === 1 && (
          <>
            <InputLabel sx={{ mt: 2 }} htmlFor="input-with-icon-adornment">
            Tasdiqlash kodini kiriting
            </InputLabel>
            <StyledTextField
              sx={{ marginTop: 0, marginBottom: 0 }}
              fullWidth
              required
              onChange={(e) => setData({ ...data, otp: e.target.value })}
              variant="outlined"
              placeholder="_  _  _  _"
              mask="9  9  9  9"
            />
          </>
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
          fullWidth
          variant="contained"
        >
          Kirish
        </StyledButton>
      </form>
    </div>
  );
};
export const StyledInputMask = styled(InputMask)`
  padding: 15px;
  font-size: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
`;
const StyledTextField = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
  }
`;
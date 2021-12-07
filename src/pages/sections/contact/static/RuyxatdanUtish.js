import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledInputMask } from "./Tizim";
import axios from "axios";
import { StyledButton, StyledLink } from "../../Admen/MaterialTovar/Tovar";
import L from "../../../../locale/language.json";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .required("you did not enter your name")
    .min(3, "Not less than 3"),
  phone_number: yup
    .string()
    .required()
    .min(7, "telifon raqamingiz 7 ta raqamdan kam buldi"),
});

function RuyxatdanUtish({ onSuccess }) {
  const lon = useSelector((state) => state.allLanguage);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickEr = (variant) => () => {
    enqueueSnackbar(L.tizim.ut[lon], { variant });
  };
  const handleClickNumber = (variant) => () => {
    enqueueSnackbar(L.tizim.xato[lon], { variant });
  };
  const handleClickSc = (variant) => () => {
    enqueueSnackbar(L.tizim.utdingiz[lon], { variant });
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone_number: "",
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post("http://dems.inone.uz/api/sign-up", data)
      .then(() => {
        handleClickSc("success")();
        onSuccess();
      })
      .catch((error) => {
        if (error.response.data.code === 55001) {
          handleClickNumber("info")();
        } else {
          handleClickEr("error")();
          onSuccess();  
        }
      });
  };
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel sx={{ mt: 2 }} htmlFor="input-with-icon-adornment">
          {L.tizim.name[lon]}
        </InputLabel>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              sx={{ marginTop: 1, marginBottom: 0 }}
              fullWidth
              variant="outlined"
              label="name"
              {...field}
            />
          )}
        />
        <p style={{ color: "red", marginTop: 10 }}>{errors.name?.message}</p>
        <InputLabel htmlFor="input-with-icon-adornment">
          {L.tizim.number[lon]}
        </InputLabel>
        <Controller
          name="phone_number"
          control={control}
          render={({ field }) => (
            <StyledInputMask
              name="phone_number"
              placeholder="+998 (__) ___-__-__"
              mask="+\9\9\8 (99) 999-99-99"
              {...field}
            />
          )}
        />
        <p style={{ color: "red", marginTop: 10 }}>{errors.email?.message}</p>
        <div>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            defaultChecked
            color="primary"
          />
          <StyledLink>
            {L.tizim.chick[lon]}{" "}
            <Link to="/failFooter">
              <a href="">{L.tizim.chickLink[lon]}</a>{" "}
            </Link>{" "}
          </StyledLink>
        </div>
        {checked ? (
          <StyledButton
            type="submit"
            sx={{
              marginTop: 1,
              marginBottom: 3,
              letterSpacing: 2,
              fontWeight: 500,
              borderRadius: 2,
            }}
            fullWidth
            variant="contained"
          >
            {L.tizim.but2[lon]}
          </StyledButton>
        ) : (
          <>
            <StyledButton
              disabled
              type="submit"
              sx={{
                marginTop: 1,
                marginBottom: 3,
                letterSpacing: 2,
                fontWeight: 500,
                borderRadius: 2,
              }}
              fullWidth
              variant="contained"
            >
              {L.tizim.but2[lon]}
            </StyledButton>
          </>
        )}
      </form>
    </div>
  );
}

export default RuyxatdanUtish;

export const StyledTextField = styled(TextField)`
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 16.5px 14px;
    @media (max-width: 550px) {
      padding: 10px 14px;
    }
  }
`;

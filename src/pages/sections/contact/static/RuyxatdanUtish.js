import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledInputMask } from "./Tizim";
import axios from "axios";
import { StyledButton } from "../../Admen/MaterialTovar/Tovar";

const schema = yup.object({
  name: yup.string().required("kritilmadi").min(3, "kamida 3 ta bulsin"),
  phone_number: yup
    .string()
    .required()
    .min(7, "telifon raqamingiz 7 ta raqamdan kam buldi"),
});

function RuyxatdanUtish() {
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

  const onSubmit = (data) => {
    console.log(data)
    axios
      .post("http://dems.inone.uz/api/sign-up", data)  
      .then((res) => console.log("Www", res));
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel sx={{ mt: 2 }} htmlFor="input-with-icon-adornment">
          Ismingizni kiriting
        </InputLabel>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              sx={{ marginTop: 1, marginBottom: 0 }}
              fullWidth
              variant="outlined"
              label="name"
              {...field}
            />
          )}
        />
        <p style={{ color: "red", marginTop: 10 }}>
          {errors.name?.message}
        </p>
        <InputLabel htmlFor="input-with-icon-adornment">Tel nomer</InputLabel>
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
          Ruyxatdan uting
        </StyledButton>
      </form>
    </div>
  );
}

export default RuyxatdanUtish;

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  username: yup.string().required("kritilmadi"),
  email: yup
    .string()
    .required()
    .min(7, "telifon raqamingiz 7 ta raqamdan kam buldi"),
});

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.secondary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.secondary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));



function RuyxatdanUtish() {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  

  const onSubmit = e => {
    e.preventDefault();
    
  }

  


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
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginTop: 1, marginBottom: 0 }}
              fullWidth
              variant="outlined"
              label="username"
              {...field}
            />
          )}
        />
        <p style={{ color: "red", marginTop: 10 }}>
          {errors.username?.message}
        </p>
        <InputLabel htmlFor="input-with-icon-adornment">
          Email yoke parolni kiriting
        </InputLabel>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginTop: 1, marginBottom: 0 }}
              fullWidth
              variant="outlined"
              label="Tew "
              type="number"
              {...field}
            />
          )}
        />
        <p style={{ color: "red", marginTop: 10 }}>{errors.email?.message}</p>
        <FormControlLabel
          control={<Android12Switch defaultChecked />}
          label="Qoidalarga rioya qilaman"
        />
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

const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    background: #f85c70;
  }
`;
const StyledButton = styled(Button)`
  && {
    background: #f85c70;

    &:hover {
      background: #f32e48;
    }
  }
`;

export default RuyxatdanUtish;

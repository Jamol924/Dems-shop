import { TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar, { CardImages } from "./Navbar";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Wrapper,
  ContentRow,
  Container,
  MenuContent,
  StyledButton,
  StyledTextField,
} from "../Admen/MaterialTovar/Tovar.jsx";
import { BackSetting } from "../../../components/Back";

function Setting() {
  const schema = yup.object({
    name: yup.string().required("This is required field"),
    status: yup.string().required("This is required field"),
    // textarea: yup
    //   .string()
    //   .required("This is required field")
    //   .min(90, "You entered less text"),
    adres: yup
      .string()
      .required("This is required field")
      .min(10, "You entered less text"),
    phone:yup.number(7).required(7,"number").positive().integer(),
    email: yup.string().required("This is required field").email("@gmail.com"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      name: "",
      // textarea: "",
      adres: "",
      phone: "",
      email: "",
    },
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const [images, setImages] = useState("");

  const img = images.data?.data.path;
  console.log("ssd", img);
  const handleImgChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios
      .post("http://dems.inone.uz/api/upload-file", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        setImages(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const [stat, setStatus] = useState("");
  // const [area, setArea] = useState("");
  const [nomer, setNomer] = useState("");
  const id = user._id;

  const handleSetting = (value) => {
    axios
      .post(
        "http://dems.inone.uz/api/update-profile",
        {
          address: value.adres,
          email: value.email,
          _id: id,
          image: img,
          name: value.name,
          phone_number: nomer,
          // short_bio: area,
          status: stat,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <form >
        <Wrapper>
          <Navbar />
          <BackSetting />
          <Container>
            <MenuContent>
              <ContentRow style={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ mb: 5 }} variant="h5">
                  фотографии*
                </Typography>
                <ContentRow
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  <CardImages>
                    <img
                      src={`http://dems.inone.uz/api${images.data?.data.path}`}
                      alt="sds"
                    />
                  </CardImages>
                  <input
                    type="file"
                    id="images"
                    hidden
                    multiple
                    onChange={handleImgChange}
                  />
                  <StyledButton variant="contained">
                    <label htmlFor="images">Изменить </label>
                  </StyledButton>
                </ContentRow>
              </ContentRow>
              <ContentRow style={{ display: "flex", justifyContent: "start" }}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mt: 3, width: "35%" }}
                      label="Введите ваше имя и фамилию *"
                      variant="filled"
                      helperText={errors?.name?.message}
                      error={errors?.name}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mt: 3, mb: 3, width: "35%", ml: 3 }}
                      label="Положение дел*"
                      variant="filled"
                      onChange={(e) => setStatus(e.target.value)}
                      helperText={errors?.status?.message}
                      error={errors?.status}
                      {...field}
                    />
                  )}
                />
              </ContentRow>
              {/* <Controller
                name="textarea"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextareaAutosize
                    style={{
                      border: "none",
                      height: "100px",
                      outline: "none",
                      fontSize: "17px",
                      padding: "15px",
                      borderRadius: "4px",
                      maxWidth: "1000px",
                    }}
                    placeholder="Био "
                    onChange={(e) => setArea(e.target.value)}
                    helperText={errors.name?.message}
                    error={errors?.textarea}
                    {...field}
                  />
                )}
              />
              <p
                style={{
                  color: "#d32f2f",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  lineHeight: 1.66,
                  letterSpacing: " 0.03333em",
                }}
              >
                {errors.textarea?.message}
              </p> */}

              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                Установидь адрес
              </Typography>
              <Controller
                name="adres"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label="Адрес*"
                    variant="filled"
                    helperText={errors.adres?.message}
                    error={errors?.adres}
                    {...field}
                  />
                )}
              />

              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                Контактная информасийа
              </Typography>
              <ContentRow style={{ display: "flex", justifyContent: "start" }}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mt: 2, width: "35%" }}
                      label="Номер телефона "
                      variant="filled"
                      type="number"
                      onChange={(e) => setNomer(e.target.value)}
                      helperText={errors.phone?.message}
                      error={errors?.phone}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mt: 2, width: "35%", ml: 3 }}
                      label="Адрес электронной  почты "
                      variant="filled"
                      helperText={errors.email?.message}
                      error={errors?.email}
                      {...field}
                    />
                  )}
                />
              </ContentRow>
              <Box>
                <StyledButton
                  sx={{ mt: 4, display: "inline-block" }}
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit(handleSetting)}
                >
                  Сохранить изменения
                </StyledButton>
              </Box>
            </MenuContent>
          </Container>
        </Wrapper>
      </form>
    </>
  );
}

export default Setting;

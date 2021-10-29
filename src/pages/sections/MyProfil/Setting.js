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
import { useDispatch } from "react-redux";
import { useImag } from "../../../redux/active/productActions";

const schema = yup.object({
  email: yup
    .string()
    .required()
    .min(7, "telifon raqamingiz 7 ta raqamdan kam buldi"),
});

function Setting() {
 const dispatch = useDispatch()
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: ""
    },
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const [images, setImages] = useState("");

  const img = images.data?.data.path;
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
  useEffect(() =>{
    dispatch(useImag(images))
  },[img]) 

  const [nam, setName] = useState("");
  const [stat, setStatus] = useState("");
  const [area, setArea] = useState("");
  const [adres, setAdres] = useState("");
  const [nomer, setNomer] = useState("");
  const [emaill, setEmaill] = useState("");
  const id = user._id;
  const handleSetting = () => {
    axios
      .post(
        "http://dems.inone.uz/api/update-profile",
        {
          address: adres,
          email: emaill,
          _id: id,
          image: img,
          name: nam,
          phone_number: nomer,
          short_bio: area,
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
            <MenuContent >
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
                    onChange={handleImgChange}
                  />
                  <StyledButton variant="contained">
                    <label htmlFor="images">Изменить </label>
                  </StyledButton>
                </ContentRow>
              </ContentRow>
              <ContentRow style={{ display: "flex", justifyContent: "start" }}>
                <StyledTextField
                  sx={{ mt: 3, width: "35%" }}
                  label="Введите ваше имя и фамилию *"
                  variant="filled"
                  onChange={(e) => setName(e.target.value)}
                />
                <StyledTextField
                  sx={{ mt: 3, mb: 3, width: "35%", ml: 3 }}
                  label="Положение дел*"
                  variant="filled"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </ContentRow>

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
                onChange={(e) => setArea(e.target.value)}
                placeholder="Био "
              />
              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                Установидь адрес
              </Typography>
              <StyledTextField
                onChange={(e) => setAdres(e.target.value)}
                label="Адрес*"
                variant="filled"
              />
              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                Контактная информасийа
              </Typography>
              <ContentRow style={{ display: "flex", justifyContent: "start" }}>
                <StyledTextField
                  sx={{ mt: 2, width: "35%" }}
                  label="Номер телефона "
                  variant="filled"
                  type="number"
                  onChange={(e) => setNomer(e.target.value)}
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
                      onChange={(e) => setEmaill(e.target.value)}
                      {...field}
                    />
                  )}
                />
                <p style={{ color: "red", marginTop: 0 }}>
                  {errors.email?.message}
                </p>
              </ContentRow>
              <Box>
                <StyledButton
                  sx={{ mt: 4, display: "inline-block" }}
                  variant="contained"
                  onClick={handleSetting}
                 
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

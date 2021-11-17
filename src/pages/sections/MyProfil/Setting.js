import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar, { CardImages } from "./Navbar";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import L from "../../../locale/language.json";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; 
import {
  Wrapper,
  ContentRow,
  Container,
  MenuContent,
  StyledButton,
  StyledTextField,
} from "../Admen/MaterialTovar/Tovar.jsx";
import { BackSetting } from "../../../components/Back";
import MinNav from "../../../components/common/MineNavbar/MinNav";

function Setting() {
  const history = useHistory();
  const lan = useSelector((state) => state.allLanguage);
  const schema = yup.object({
    name: yup.string().required("This is required field"),
    status: yup.string().required("This is required field"),
    adres: yup
      .string()
      .required("This is required field")
      .min(10, "You entered less text"),
    phone: yup.number(7).required(7, "number").positive().integer(),
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
        history.push("/myProfil")
      });
  };

  return (
    <>
      <form>
        <Wrapper>
          <Navbar />
          <MinNav />
          <BackSetting />
          <Container>
            <MenuContent>
              <ContentRow style={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ mb: 5 }} variant="h5">
                  {L.tovarAdd.cars.foto[lan]} *
                </Typography>
                <ContentRow
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  <CardImages>
                    <img
                      src={`http://dems.inone.uz/api${images.data?.data.path}`}
                      alt="photo"
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
                    <label htmlFor="images">{L.settng.but1[lan]} </label>
                  </StyledButton>
                </ContentRow>
              </ContentRow>
              <ContentRow style={{ display: "flex", justifyContent: "space-between" }}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{mb:2}}
                      label={L.settng.ved[lan]}
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
                      label={L.settng.pol[lan]}
                      variant="filled"
                      onChange={(e) => setStatus(e.target.value)}
                      helperText={errors?.status?.message}
                      error={errors?.status}
                      {...field}
                    />
                  )}
                />
              </ContentRow>

              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                {L.settng.ustanov[lan]}
              </Typography>
              <Controller
                name="adres"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label={L.settng.adres[lan]}
                    variant="filled"
                    helperText={errors.adres?.message}
                    error={errors?.adres}
                    {...field}
                  />
                )}
              />

              <Typography sx={{ mt: 5, mb: 5 }} variant="h5">
                {L.settng.contact[lan]}
              </Typography>
              <ContentRow style={{ display: "flex", justifyContent: "space-between" }}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 2 }}
                      label={L.settng.nomer[lan]}
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
                      sx={{ mb: 3}}
                      label={L.settng.email[lan]}
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
                  
                  {L.settng.but2[lan]}
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

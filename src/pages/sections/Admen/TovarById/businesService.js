import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MenuItem, Select, Typography } from "@mui/material";
import { InputLabel, TextareaAutosize } from "@material-ui/core";
import Nav2 from "../../../../components/Nav2";
import {  BackTovarByID } from "../../../../components/Back";
import LoaderSpinner from "../../../../Loader/loader";
import { AcceptMaxFiles } from "../../MyProfil/DropZovn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import L from "../../../../locale/language.json";
import * as yup from "yup";
import { Box } from "@mui/system";
import axios from "axios";
import {
  Wrapper,
  Container,
  StyledButton,
  MenuContent,
  StyledTextField,
  ContentRow,
  StyledFormControl,
  StyledMenuItem
} from "../MaterialTovar/Tovar";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Businesservice({ category, dataCard }) {
  const lan = useSelector((state) => state.allLanguage);
  const history = useHistory();
  const busines = category;
  const [area, setArea] = useState("");
  const [zagol, setZagol] = useState("");
  const [businser, setBusinser] = useState(dataCard.business_service);
  const handleMobile = (e) => {
    setBusinser(e.target.value);
  };

  const [gorod, setGorod] = useState(dataCard.city_id);
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState(dataCard.region_id);
  const [regions, setRegions] = useState([]);
  console.log(regions);

  const regionFetch = async () => {
    axios
      .post("http://dems.inone.uz/api/region/get-pagin", {
        limit: 20,
        page: 1,
        search: " ",
      })
      .then((res) => {
        setRegions(res.data.data.data);
        setLoading(false);
      })
      .catch((er) => console.log(er));
  };
  const gorodFetch = async (id) => {
    axios
      .post("http://dems.inone.uz/api/city/get-pagin", {
        limit: 20,
        page: 1,
        region_id: id,
        search: "",
      })
      .then((res) => setGorods(res.data.data.data))
      .catch((err) => console.log("Xato", err));
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    gorodFetch(event.target.value);
  };
  const handleGorodChange = (event) => {
    setGorod(event.target.value);
  };

  useEffect(() => {
    regionFetch();
  }, []);

  const [sena, setSena] = useState("");

  const [sum, setSum] = useState(dataCard.currency);
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);
  const handlSubmit = (value) => {
    axios
      .post(
        "http://dems.inone.uz/api/ad/update",
        {
          type: dataCard.type,
          _id: dataCard._id,
          title: value.name,
          business_service: businser,
          price: parseInt(value.sen),
          currency: sum,
          region_id: region,
          city_id: gorod,
          description: value.textarea,
          images: itemImages,
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
        history.push("/myProfil");
        console.log(res);
      })
      .catch(() => console.log(localStorage.getItem("token")));
  };

  const schema = yup.object({
    name: yup.string().required("This is required field"),
    sen: yup.string().required("This is required field"),
    textarea: yup
      .string()
      .required("This is required field")
      .min(15, "Not less than 15 words"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      name: dataCard.title,
      sen: dataCard.price,
      textarea: dataCard.description,
    },
  });

  const [loading, setLoading] = useState(true);
  return loading ? (
    <LoaderSpinner />
  ) : (
    <>
      <form >
        <Wrapper>
          <Nav2 />
          <MinNav />
          <BackTovarByID />
          <Container>
            <Typography sx={{ mb: 3 }} variant="h4">
              {L.tovarAdd.bus.name[lan]}
            </Typography>
            <MenuContent>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label={L.tovarAdd.cars.title[lan]}
                    variant="filled"
                    onChange={(e) => setZagol(e.target.value)}
                    helperText={errors.name?.message}
                    error={errors?.name}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={businser} onChange={handleMobile}>
                    <StyledMenuItem value="financial-services">
                      {L.tovarAdd.bus.bustov.bus1[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="transportation-rental">
                      {L.tovarAdd.bus.bustov.bus2[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="adverising-printing-marketing-internet">
                      {L.tovarAdd.bus.bustov.bus3[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="devices">{L.tovarAdd.bus.bustov.bus4[lan]}</StyledMenuItem>
                    <StyledMenuItem value="education-sports">
                      {L.tovarAdd.bus.bustov.bus5[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="animal-services">{L.tovarAdd.bus.bustov.bus6[lan]}</StyledMenuItem>
                    <StyledMenuItem value="tourism">{L.tovarAdd.bus.bustov.bus7[lan]}</StyledMenuItem>
                    <StyledMenuItem value="interpreter-services">
                      {L.tovarAdd.bus.bustov.bus8[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="maintenance-repair-of-equipment">
                      {L.tovarAdd.bus.bustov.bus9[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="juridical-services">
                   {L.tovarAdd.bus.bustov.bus10[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="others">{L.tovarAdd.bus.bustov.bus11[lan]}</StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
              {L.tovarAdd.cars.sena[lan]} *
              </Typography>
              <ContentRow>
                <Controller
                  name="sen"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 3 }}
                      onChange={(e) => setSena(e.target.value)}
                      label={L.tovarAdd.cars.sena[lan]} 
                      variant="filled"
                      type="number"
                      helperText={errors.sen?.message}
                      error={errors?.sen}
                      {...field}
                    />
                  )}
                />
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={sum} label="sum" onChange={handleSumChange}>
                    <StyledMenuItem value="uzs">uzs</StyledMenuItem>
                    <StyledMenuItem value="usd">usd</StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
              {L.tovarAdd.cars.mesto[lan]} *
              </Typography>
              <ContentRow>
                <StyledFormControl variant="filled" sx={{mb:3, minWidth: 120 }}>
                  <InputLabel>{L.tovarAdd.cars.region[lan]} *</InputLabel>
                  <Select
                    value={region}
                    label="sum"
                    onChange={handleRegionChange}
                  >
                    {regions.map((Region) => (
                      <StyledMenuItem value={Region._id}>{Region.name}</StyledMenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>{L.tovarAdd.cars.gorod[lan]} *</InputLabel>
                  <Select
                    value={gorod}
                    label="sum"
                    onChange={handleGorodChange}
                  >
                    {gorods.map((Gorod) => (
                      <StyledMenuItem value={Gorod._id} key={Gorod._id}>
                        {Gorod.name}
                      </StyledMenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
              {L.tovarAdd.cars.opesan[lan]} *
              </Typography>
              <Controller
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
                    placeholder={L.tovarAdd.cars.opesanPlas[lan]} 
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
              </p>
            </MenuContent>
            <AcceptMaxFiles />
            <Box sx={{ mt: 2, mb:4 }}>
              <StyledButton
                onClick={handleSubmit(handlSubmit)}
                
                variant="contained"
                variant="contained"
              >{L.tovarAdd.cars.but12[lan]}
              </StyledButton>
            </Box>
          </Container>
        </Wrapper>
      </form>
    </>
  );
}
export default Businesservice;

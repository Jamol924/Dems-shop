import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { categoreProduct, carsEliment  } from "../../../../redux/active/productActions";
import Nav2 from "../../../../components/Nav2";
import LoaderSpinner from "../../../../Loader/loader";
import { BackTovarByID} from "../../../../components/Back";
import { AcceptMaxFiles } from "../../MyProfil/DropZovn";
import L from "../../../../locale/language.json";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import {
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  StyledTextField,
  Wrapper,
  Container,
  MenuContent,
  ContentRow,
  StyledFormControl,
  StyledButton,
  StyledMenuItem,
  StyledToggleButton
} from "../MaterialTovar/Tovar.jsx";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Cars({category, dataCard}) {
  const lan = useSelector((state) => state.allLanguage);
  console.log(dataCard.type)
  let history = useHistory();
  const cars = category;
  const dispatch = useDispatch();
  const [models, setModels] = useState([]);
  const [age, setAge] = useState(dataCard.brand_id);
  const [model, setModel] = useState(dataCard.model_id);
  
  const CategoreRispons = useSelector((state) => state.CategoreCard.Categore);
  const handleApi = async () => {
    await axios
      .post("http://dems.inone.uz/api/brand/get-pagin", {
        limit: 10,
        page: 1,
        search: "",
      })
      .then((res) => {
        dispatch(categoreProduct(res.data.data));
      })
      .catch((err) => console.log(err));
  };

  const getModels = async (id) => {
    await axios
      .post("http://dems.inone.uz/api/model/get-pagin ", {
        brand_id: id,
        page: 1,
        search: "",
        limit: 20,
      })
      .then((res) => {
        setModels(res.data.data.data);
      });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    getModels(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const [god, setGod] = useState("");
  const handleGodChange = (el) => {
    setGod(el.target.value);
  };

  const [toplivo, setToplivo] = useState(dataCard.fuel);
  const handleTolivoChange = (event) => {
    setToplivo(event.target.value);
  };

  const [novy, setNovy] = useState(dataCard.condition);
  const handleNovyChange = (event) => {
    setNovy(event.target.value);
  };

  const [sena, setSena] = useState("");
  const handleSenaChange = (el) => {
    setSena(el.target.value);
  };
  const [sum, setSum] = useState(dataCard.currency);
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };
  const [alignment, setAlignment] = useState(dataCard.color);
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [textarea, setTextarea] = useState("");
  const handleTextareaChange = (el) => {
    setTextarea(el.target.value);
  };

  const [gorod, setGorod] = useState("");
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);

  const regionFetch = async () => {
    await axios
      .post("http://dems.inone.uz/api/region/get-pagin", {
        limit: 20,
        page: 1,
        search: " ",
      })
      .then((res) => {
        setRegions(res.data.data.data);
      })
      .catch((er) => console.log(er));
  };
  const gorodFetch = async (id) => {
   await  axios
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
    handleApi();
    regionFetch();
  }, []);

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);
  const handlSubmit = async (values) => {
    await axios
      .post(
        "http://dems.inone.uz/api/ad/update",
        {
          brand_id: age,
          city_id: gorod,
          color: alignment,
          condition: novy,
          currency: sum,
          description: values.textarea, 
          fuel: toplivo,
          _id:dataCard._id,
          images: itemImages,
          model_id: model,
          price: parseInt(values.sen),
          region_id: region,
          title: values.name,
          type: dataCard.type,
          year_out: parseInt(values.godo),
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
        console.log(res)
      })
      .catch(() => console.log());
  };

  const schema = yup.object({
    name: yup.string().required("This is required field"),
    godo: yup.string().required("This is required field"),
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
      godo: dataCard.year_out,
      sen: dataCard.price,
      textarea: dataCard.description,
    },
  });

  return CategoreRispons.length === 0 ? (
    <LoaderSpinner />
  ) : (
    <>
      <form>
        <Wrapper>
          <Nav2 />
          <MinNav />
          <BackTovarByID />
          <Container>
            <Typography sx={{ mb: 3 }} variant="h4">
              {L.tovarAdd.cars.name[lan]}
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
                    helperText={errors?.name?.message}
                    error={errors?.name}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, display: "flex", minWidth: 120 }}
                >
                  <InputLabel>{L.tovarAdd.cars.marka[lan]}*</InputLabel>

                  <Select
                    value={age}
                    onChange={handleChange}
                  >
                    {CategoreRispons.data.map((Categor) => (
                      <StyledMenuItem  value={Categor._id}>{Categor.name}</StyledMenuItem>
                    ))}
                  </Select>
                </StyledFormControl>

                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>{L.tovarAdd.cars.model[lan]}*</InputLabel>

                  <Select
                    value={model}
                    label="Модель"
                    onChange={handleModelChange}
                  >
                    {models.map((modelItem) => (
                      <StyledMenuItem value={modelItem._id} key={modelItem._id}>
                        {modelItem.name}
                      </StyledMenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>

            <MenuContent>
              <Controller
                name="godo"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    value={god}
                    type="number"
                    onChange={handleGodChange}
                    sx={{ mb: 3 }}
                    label={L.tovarAdd.cars.god[lan]}
                    variant="filled"
                    helperText={errors?.godo?.message}
                    error={errors?.godo}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <Select
                    value={toplivo}
                    label="Age"
                    onChange={handleTolivoChange}
                  >
                    <StyledMenuItem value={"Chevrolet"}>
                      {L.tovarAdd.cars.toplvo[lan]}{" "}
                    </StyledMenuItem>
                    <StyledMenuItem value={"Daevo"}>
                      {L.tovarAdd.cars.ben[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value={"Baz"}>
                      {L.tovarAdd.cars.gaz[lan]}{" "}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>

                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={novy} label="Age" onChange={handleNovyChange}>
                    <StyledMenuItem value="new">{L.tovarAdd.fash.now[lan]}</StyledMenuItem>
                    <StyledMenuItem value="old">В/У </StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                {L.tovarAdd.cars.svet[lan]}*
              </Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <StyledToggleButton
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "none",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="white"
                  aria-label="left aligned"
                ></StyledToggleButton>
                <StyledToggleButton
                  sx={{
                    backgroundColor: "red",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="red"
                  aria-label="centered"
                ></StyledToggleButton>
                <StyledToggleButton
                  sx={{
                    backgroundColor: "green",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="green"
                  aria-label="right aligned"
                ></StyledToggleButton>
                <StyledToggleButton
                  sx={{
                    backgroundColor: "black",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="black"
                  aria-label="right aligned"
                ></StyledToggleButton>
                <StyledToggleButton
                  sx={{
                    backgroundColor: "yellow",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="yellow"
                  aria-label="right aligned"
                ></StyledToggleButton>
              </ToggleButtonGroup>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                {L.tovarAdd.cars.sena[lan]}*
              </Typography>
              <Grid spacing={2}>
                <Controller
                  name="sen"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 3, mr: 10 }}
                      value={sena}
                      onChange={handleSenaChange}
                      label={L.tovarAdd.cars.sena[lan]}
                      variant="filled"
                      helperText={errors?.sen?.message}
                      error={errors?.sen}
                      {...field}
                      type="number"
                    />
                  )}
                />
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={sum} label="sum" onChange={handleSumChange}>
                    <StyledMenuItem value="uzs">uzs</StyledMenuItem>
                    <StyledMenuItem value="usd">usd</StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </Grid>
            </MenuContent>

            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                {L.tovarAdd.cars.mesto[lan]}*
              </Typography>
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <InputLabel>{L.tovarAdd.cars.region[lan]}*</InputLabel>
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
                  <InputLabel>{L.tovarAdd.cars.gorod[lan]}*</InputLabel>
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
              <Typography sx={{ mb: 1 }} variant="h5">
                {L.tovarAdd.cars.opesan[lan]}
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
                    placeholder="Био "
                    placeholder={L.tovarAdd.cars.opesanPlas[lan]}
                    value={textarea}
                    onChange={handleTextareaChange}
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
export default Cars;

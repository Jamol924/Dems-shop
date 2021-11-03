import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { categoreProduct } from "../../../../redux/active/productActions";
import Nav2 from "../../../../components/Nav2";
import LoaderSpinner from "../../../../Loader/loader";
import { CarsLink } from "../../../../components/Back";
import { AcceptMaxFiles } from "../../MyProfil/DropZovn";
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
} from "../MaterialTovar/Tovar.jsx";

function Cars(props) {
  let history = useHistory();
  const cars = props.category;
  const dispatch = useDispatch();
  const [models, setModels] = useState([]);
  const [age, setAge] = useState("");
  const CategoreRispons = useSelector((state) => state.CategoreCard.Categore);
  const [model, setModel] = useState("");

  const handleApi = async () => {
    axios
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
    axios
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

  const [toplivo, setToplivo] = useState("Chevrolet");
  const handleTolivoChange = (event) => {
    setToplivo(event.target.value);
  };

  const [novy, setNovy] = useState("new");
  const handleNovyChange = (event) => {
    setNovy(event.target.value);
  };

  const [sena, setSena] = useState("");
  const handleSenaChange = (el) => {
    setSena(el.target.value);
  };
  const [sum, setSum] = useState("usd");
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };
  const [alignment, setAlignment] = useState("#ccc");
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
    axios
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
    handleApi();
    regionFetch();
  }, []);

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);
  const handlSubmit = (values) => {
    console.log(
      "QIYMAT",
      values.name,
      values.godo,
      values.sen,
      values.textarea
    );
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          brand_id: age,
          city_id: gorod,
          color: alignment,
          condition: novy,
          currency: sum,
          description: values.textarea,
          fuel: toplivo,
          images: itemImages,
          model_id: model,
          price: parseInt(values.sen),
          region_id: region,
          title: values.name,
          type: cars,
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
        console.log(res);
        history.push("/okFilse");
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
      .min(90, "You entered less text"),
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
      godo: "",
      sen: "",
      textarea: "",
    },
  });

  return CategoreRispons.length === 0 ? (
    <LoaderSpinner />
  ) : (
    <>
      <form>
        <Wrapper>
          <Nav2 />
          <CarsLink />
          <Container>
            <Typography sx={{ mb: 3 }} variant="h4">
              информация о продукте
            </Typography>
            <MenuContent>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label="заголовок объявления*"
                    variant="filled"
                    helperText={errors?.name?.message}
                    error={errors?.name}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>Марка*</InputLabel>

                  <Select value={age} onChange={handleChange}>
                    {CategoreRispons.data.map((Categor) => (
                      <MenuItem value={Categor._id}>{Categor.name}</MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>

                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>Модель*</InputLabel>

                  <Select
                    value={model}
                    label="Модель"
                    onChange={handleModelChange}
                  >
                    {models.map((modelItem) => (
                      <MenuItem value={modelItem._id} key={modelItem._id}>
                        {modelItem.name}
                      </MenuItem>
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
                    label="год впуска*"
                    variant="filled"
                    helperText={errors?.godo?.message}
                    error={errors?.godo}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select
                    value={toplivo}
                    label="Age"
                    onChange={handleTolivoChange}
                  >
                    <MenuItem value={"Chevrolet"}>топливо </MenuItem>
                    <MenuItem value={"Daevo"}>Бензин </MenuItem>
                    <MenuItem value={"Baz"}>Этханол </MenuItem>
                  </Select>
                </StyledFormControl>

                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={novy} label="Age" onChange={handleNovyChange}>
                    <MenuItem value="new">Новый </MenuItem>
                    <MenuItem value="old">В/У </MenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                цвет*
              </Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "none",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="white"
                  aria-label="left aligned"
                ></ToggleButton>
                <ToggleButton
                  sx={{
                    backgroundColor: "red",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="red"
                  aria-label="centered"
                ></ToggleButton>
                <ToggleButton
                  sx={{
                    backgroundColor: "green",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="green"
                  aria-label="right aligned"
                ></ToggleButton>
                <ToggleButton
                  sx={{
                    backgroundColor: "black",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="black"
                  aria-label="right aligned"
                ></ToggleButton>
                <ToggleButton
                  sx={{
                    backgroundColor: "yellow",
                    width: "60px",
                    height: "60px",
                    marginRight: "20px",
                  }}
                  value="yellow"
                  aria-label="right aligned"
                ></ToggleButton>
              </ToggleButtonGroup>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                цена*
              </Typography>
              <Grid spacing={2}>
                <Controller
                  name="sen"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mr: 10 }}
                      value={sena}
                      onChange={handleSenaChange}
                      label="сена*"
                      variant="filled"
                      helperText={errors?.sen?.message}
                      error={errors?.sen}
                      {...field}
                    />
                  )}
                />
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={sum} label="sum" onChange={handleSumChange}>
                    <MenuItem value={"usd"}>usd</MenuItem>
                    <MenuItem value={"eur"}>eur</MenuItem>
                  </Select>
                </StyledFormControl>
              </Grid>
            </MenuContent>

            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                местонахождение*
              </Typography>
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>region*</InputLabel>
                  <Select
                    value={region}
                    label="sum"
                    onChange={handleRegionChange}
                  >
                    {regions.map((Region) => (
                      <MenuItem value={Region._id}>{Region.name}</MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>

                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel>город*</InputLabel>
                  <Select
                    value={gorod}
                    label="sum"
                    onChange={handleGorodChange}
                  >
                    {gorods.map((Gorod) => (
                      <MenuItem value={Gorod._id} key={Gorod._id}>
                        {Gorod.name}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 1 }} variant="h5">
                описане
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
                    placeholder="Добавить краткое описане"
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
            <Box>
              <StyledButton
                onClick={handleSubmit(handlSubmit)}
                sx={{ mt: 4, display: "inline-block" }}
                variant="contained"
                type="submit"
              >
                опубликовать
              </StyledButton>
            </Box>
          </Container>
        </Wrapper>
      </form>
    </>
  );
}
export default Cars;

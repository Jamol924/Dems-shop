import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/system";
import axios from "axios";
import Nav2 from "../../../../components/Nav2";
import { BackAdminHome } from "../../../../components/Back";
import LoaderSpinner from "../../../../Loader/loader";
import { AcceptMaxFiles } from "../../MyProfil/DropZovn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
  ListItemText,
  Checkbox,
} from "@mui/material";
import {
  StyledTextField,
  Wrapper,
  Container,
  MenuContent,
  ContentRow,
  StyledFormControl,
  StyledButton,
} from "../MaterialTovar/Tovar";

function Home({ category }) {
  const history = useHistory();
  const homee = category;
  const [zagol, setZagol] = useState("");
  const handleZagol = (el) => {
    setZagol(el.target.value);
  };

  const [glavne, setGlavne] = useState("home");
  const handleGlavneChange = (el) => {
    setGlavne(el.target.value);
  };
  const [arend, setArend] = useState("sell");
  const handleArend = (el) => {
    setArend(el.target.value);
  };
  const [tip, setTip] = useState([]);
  const handleApi = async () => {
    fetch("http://dems.inone.uz/api/home-plan/get")
      .then((res) => res.json())
      .then((res) => setTip(res.data))
      .catch((err) => console.log(err));
  };
  const [tips, setTips] = useState("");
  const handleTips = (el) => {
    setTips(el.target.value);
  };

  const [komnat, setKomnat] = useState("");
  const handleKomnat = (el) => {
    setKomnat(el.target.value);
  };

  const [novy, setNovy] = useState("new");
  const handleNovyChange = (event) => {
    setNovy(event.target.value);
  };
  const [god, setGod] = useState("");
  const handleGod = (event) => {
    setGod(event.target.value);
  };
  const [has, setHas] = useState(false);
  const handleHas = (event) => {
    setHas(event.target.value);
  };
  const [otremont, setOtremont] = useState("repaired");
  const handleRem = (event) => {
    setOtremont(event.target.value);
  };
  const [kir, setKir] = useState("brick");
  const handleKir = (event) => {
    setKir(event.target.value);
  };
  const [cost, setCost] = useState(true);
  const handleCost = (event) => {
    setCost(event.target.value);
  };
  const [visota, setVisota] = useState("");
  const handleVisota = (event) => {
    setVisota(event.target.value);
  };
  const [etaj, setEtaj] = useState("");
  const [etajj, setEtajj] = useState("");

  const [razmer, setRazmer] = useState("");
  const [dostup, setDostup] = useState("");

  const [ryadom, setRyadom] = useState("");

  const [sena, setSena] = useState("");
  const [sum, setSum] = useState("uzs");
  const handleSumChange = (e) => {
    setSum(e.target.value);
  };

  const [gorod, setGorod] = useState("");
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const [textarea, setTextarea] = useState("");
  const handleTextareaChange = (el) => {
    setTextarea(el.target.value);
  };
  const [personName, setPersonName] = useState([]);
  const [eror, setEror] = useState();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [names, setNames] = useState([]);
  const handleBitovay = () => {
    fetch("http://dems.inone.uz/api/appliances/get", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((elment) => setNames(elment.data))
      .catch((err) => console.log("dsfdsfd", err));
  };
  useEffect(() => {
    handleBitovay();
  }, []);

  useEffect(() => {
    handleApi();
    regionFetch();
    handleApi();
  }, []);

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);

  const handlSubmit = (value) => {
    console.log("Val", value.name);
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          title: value.name,
          type: homee,
          subtype: glavne,
          sell_property: arend,
          home_plan: tips,
          count_room: parseInt(value.kol),
          situation: novy,
          year_house_build: parseInt(value.god),
          has_furniture: false,
          celling_height: parseInt(value.potol),
          house_renovation: otremont,
          construction: kir,
          has_additional_cost: cost,
          floor: parseInt(value.etaj),
          floor_of_house: parseInt(value.etajd),
          appliances: personName,
          located_near: ryadom,
          size: parseInt(value.raz),
          available_size: parseInt(value.rya),
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
        history.push("/okFilse");
        console.log(res);
      })
      .catch(() => console.log(localStorage.getItem("token")));
  };

  const schema = yup.object({
    name: yup.string().required("This is required field"),
    kol: yup.string().required("This is required field"),
    god: yup.string().required("This is required field"),
    potol: yup.string().required("This is required field"),
    etaj: yup.string().required("This is required field"),
    etajd: yup.string().required("This is required field"),
    rya: yup.string().required("This is required field"),
    raz: yup.string().required("This is required field"),
    dos: yup.string().required("This is required field"),
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
      kol: "",
      god: "",
      potol: "",
      name: "",
      godo: "",
      etaj: "",
      etajd: "",
      rya: "",
      raz: "",
      dos: "",
      sen: "",
      textarea: "",
    },
  });

  return loading ? (
    <LoaderSpinner />
  ) : (
    <>
      <form>
        <Wrapper>
          <Nav2 />
          <BackAdminHome />
          <Container style={{ marginTop: 0 }}>
            <Typography sx={{ mb: 3 }} variant="h4">
              Детали дома
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
                    value={zagol}
                    onChange={handleZagol}
                    helperText={errors?.name?.message}
                    error={errors?.name}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={glavne} onChange={handleGlavneChange}>
                    <MenuItem value="home">Главная</MenuItem>
                    <MenuItem value="apartment">Квартера</MenuItem>
                    <MenuItem value="earth">Земля</MenuItem>
                    <MenuItem value="garage">Гараж</MenuItem>
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={arend} onChange={handleArend}>
                    <MenuItem value="sell">Аренда</MenuItem>
                    <MenuItem value="rent">Аренда посуточно</MenuItem>
                    <MenuItem value="dialy-rent">Продажа</MenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={tips} label="sum" onChange={handleTips}>
                    {tip.map((tp) => (
                      <MenuItem value={tp._id}>{tp.name}</MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={novy} label="Age" onChange={handleNovyChange}>
                    <MenuItem value="new">новий</MenuItem>
                    <MenuItem value="old">B/</MenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
              <Controller
                name="kol"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    value={komnat}
                    onChange={handleKomnat}
                    sx={{ mb: 3, mt: 3 }}
                    label="количество комнат*"
                    variant="filled"
                    type="number"
                    helperText={errors?.kol?.message}
                    error={errors?.kol}
                    {...field}
                  />
                )}
              />
              <Controller
                name="god"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    value={god}
                    onChange={handleGod}
                    sx={{ mb: 3 }}
                    label="Год постройки /сдачи"
                    variant="filled"
                    type="number"
                    helperText={errors?.god?.message}
                    error={errors?.god}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={has} label="has" onChange={handleHas}>
                    <MenuItem value={false}>Has furniture</MenuItem>
                    <MenuItem value={true}>No furniture</MenuItem>
                  </Select>
                </StyledFormControl>
                <Controller
                  name="potol"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      value={visota}
                      onChange={handleVisota}
                      sx={{ mb: 3 }}
                      label="высота потолков (m)"
                      variant="filled"
                      type="number"
                      helperText={errors?.potol?.message}
                      error={errors?.potol}
                      {...field}
                    />
                  )}
                />
              </ContentRow>
              <ContentRow>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={otremont} label="has" onChange={handleRem}>
                    <MenuItem value="repaired">отремонтирован</MenuItem>
                    <MenuItem value="not-repaired">Не пьемонтируется</MenuItem>
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={kir} label="has" onChange={handleKir}>
                    <MenuItem value="brick">кирпичный</MenuItem>
                    <MenuItem value="panel">панельный</MenuItem>
                    <MenuItem value="monolithic">Монолитный</MenuItem>
                    <MenuItem value="foam-block">Блочный</MenuItem>
                    <MenuItem value="other">Другой</MenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={cost} label="has" onChange={handleCost}>
                  <MenuItem value={true}>Have brokerage fee</MenuItem>
                  <MenuItem value={false}>No brokerage fee</MenuItem>
                </Select>
              </StyledFormControl>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h4">
                Этаж
              </Typography>
              <ContentRow>
                <Controller
                  name="etaj"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 3 }}
                      label="Этаж"
                      variant="filled"
                      type="number"
                      onChange={(e) => setEtaj(e.target.value)}
                      helperText={errors?.etaj?.message}
                      error={errors?.etaj}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="etajd"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 3, width: 400 }}
                      label="Этажность дома"
                      variant="filled"
                      type="number"
                      onChange={(e) => setEtajj(e.target.value)}
                      helperText={errors?.etajd?.message}
                      error={errors?.etajd}
                      {...field}
                    />
                  )}
                />
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h4">
                Comforts
              </Typography>
              <StyledFormControl variant="filled" sx={{ mb: 3, minWidth: 120 }}>
                <Select
                  multiple
                  value={personName}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(", ")}
                  label="sum"
                >
                  {names.map((tp) => (
                    <MenuItem key={tp._id} value={tp._id}>
                      {/* <Checkbox checked={personName.indexOf(tp.name) > -1} /> */}
                      <ListItemText primary={tp.name} />
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
              <Controller
                name="rya"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label="Рядом есть"
                    onChange={(e) => setRyadom(e.target.value)}
                    variant="filled"
                    helperText={errors?.rya?.message}
                    error={errors?.rya}
                    {...field}
                  />
                )}
              />
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h4">
                Размер
              </Typography>
              <Controller
                name="raz"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label="Размер (m)2"
                    onChange={(e) => setRazmer(e.target.value)}
                    variant="filled"
                    sx={{ mb: 3 }}
                    helperText={errors?.raz?.message}
                    error={errors?.raz}
                    {...field}
                  />
                )}
              />
              <Controller
                name="dos"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label="Доступный (m)2"
                    onChange={(e) => setDostup(e.target.value)}
                    variant="filled"
                    helperText={errors?.dos?.message}
                    error={errors?.dos}
                    {...field}
                  />
                )}
              />
            </MenuContent>

            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
                цена*
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
                    <MenuItem value={"uzs"}>uzs</MenuItem>
                    <MenuItem value={"usd"}>usd</MenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>

            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
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
              <Typography sx={{ mb: 3 }} variant="h5">
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
export default Home;

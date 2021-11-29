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
import L from "../../../../locale/language.json";
import * as yup from "yup";
import {
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
  ListItemText,
  Checkbox,
  Autocomplete,
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
} from "../MaterialTovar/Tovar";
import MinNav from "../../../../components/common/MineNavbar/MinNav";
import { useSnackbar } from "notistack";

function Home({ category }) {
  const lan = useSelector((state) => state.allLanguage);
  const history = useHistory();
  const homee = category;
  const [zagol, setZagol] = useState("");
  const handleZagol = (el) => {
    setZagol(el.target.value);
  };
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar(L.tizim.tovar[lan], { variant });
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
  const [abs,setAbs] = useState([]);

  const [names, setNames] = useState([]);
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    let ids = names.filter(n => {
      const index = value.findIndex(val => val === n.name);
      if(index !== -1){
        return n
      }
    });
    const idname = ids.map(item => item._id);
    setAbs(idname)
    setPersonName(typeof value === "string" ? value.split(" , ") : value);
  };

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
          appliances: abs,
          located_near: value.rya,
          size: parseInt(value.raz),
          available_size: parseInt(value.dos),
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
      .then(() => {
        history.push("/Admen");
        handleClickVariant("success")();
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
          <MinNav />
          <BackAdminHome />
          <Container style={{ marginTop: 0 }}>
            <Typography sx={{ mb: 3 }} variant="h4">
              {L.tovarAdd.home.name[lan]}
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
                    value={zagol}
                    onChange={handleZagol}
                    helperText={errors?.name?.message}
                    error={errors?.name}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <Select value={glavne} onChange={handleGlavneChange}>
                    <StyledMenuItem value="home">
                      {L.tovarAdd.home.glav1[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="apartment">
                      {L.tovarAdd.home.glav2[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="earth">
                      {L.tovarAdd.home.glav3[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="garage">
                      {L.tovarAdd.home.glav4[lan]}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={arend} onChange={handleArend}>
                    <StyledMenuItem value="sell">
                      {L.tovarAdd.home.aren1[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="rent">
                      {L.tovarAdd.home.aren2[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="dialy-rent">
                      {L.tovarAdd.home.aren3[lan]}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>
            <MenuContent>
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <Select value={tips} label="sum" onChange={handleTips}>
                    {tip.map((tp) => (
                      <StyledMenuItem value={tp._id}>{tp.name}</StyledMenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={novy} label="Age" onChange={handleNovyChange}>
                    <StyledMenuItem value="new">
                      {L.tovarAdd.fash.now[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="old">B/У</StyledMenuItem>
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
                    label={L.tovarAdd.home.komnat[lan]}
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
                    label={L.tovarAdd.home.god[lan]}
                    variant="filled"
                    type="number"
                    helperText={errors?.god?.message}
                    error={errors?.god}
                    {...field}
                  />
                )}
              />
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <Select value={has} label="has" onChange={handleHas}>
                    <StyledMenuItem value={false}>
                      {L.tovarAdd.home.has[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value={true}>
                      {L.tovarAdd.home.has2[lan]}
                    </StyledMenuItem>
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
                      label={L.tovarAdd.home.vsota[lan]}
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
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <Select value={otremont} label="has" onChange={handleRem}>
                    <StyledMenuItem value="repaired">
                      {L.tovarAdd.home.ot[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="not-repaired">
                      {L.tovarAdd.home.ot2[lan]}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>
                <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                  <Select value={kir} label="has" onChange={handleKir}>
                    <StyledMenuItem value="brick">
                      {L.tovarAdd.home.krpch1[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="panel">
                      {L.tovarAdd.home.krpch2[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="monolithic">
                      {L.tovarAdd.home.krpch3[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="foam-block">
                      {L.tovarAdd.home.krpch4[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="other">
                      {L.tovarAdd.home.krpch5[lan]}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={cost} label="has" onChange={handleCost}>
                  <StyledMenuItem value={true}>
                    {L.tovarAdd.home.have[lan]}
                  </StyledMenuItem>
                  <StyledMenuItem value={false}>
                    {L.tovarAdd.home.have2[lan]}
                  </StyledMenuItem>
                </Select>
              </StyledFormControl>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h4">
                {L.tovarAdd.home.etaj[lan]}
              </Typography>
              <ContentRow>
                <Controller
                  name="etaj"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTextField
                      sx={{ mb: 3 }}
                      label={L.tovarAdd.home.etaj[lan]}
                      variant="filled"
                      type="number"
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
                      label={L.tovarAdd.home.etajd[lan]}
                      variant="filled"
                      type="number"
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
                {L.tovarAdd.home.komfort[lan]}
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
                    <StyledMenuItem key={tp._id} value={tp.name}>
                      {/* <Checkbox checked={personName.indexOf(tp.name) > -1} /> */}
                      <ListItemText primary={tp.name} />
                    </StyledMenuItem>
                  ))}
                </Select>
              </StyledFormControl>

              {/* <Autocomplete
                multiple
                options={names}
                getOptionLabel={(option) => `$`}
                defaultValue={[names[13]]}
              /> */}
              <Controller
                name="rya"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label={L.tovarAdd.home.ryadom[lan]}
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
                {L.tovarAdd.fash.raz[lan]}
              </Typography>
              <Controller
                name="raz"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label={L.tovarAdd.home.razmer1[lan]}
                    variant="filled"
                    sx={{ mb: 3 }}
                    helperText={errors?.raz?.message}
                    error={errors?.raz}
                    {...field}
                    type="number"
                  />
                )}
              />
              <Controller
                name="dos"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    label={L.tovarAdd.home.razmer2[lan]}
                    variant="filled"
                    helperText={errors?.dos?.message}
                    error={errors?.dos}
                    {...field}
                    type="number"
                  />
                )}
              />
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
                    <StyledMenuItem value={"uzs"}>uzs</StyledMenuItem>
                    <StyledMenuItem value={"usd"}>usd</StyledMenuItem>
                  </Select>
                </StyledFormControl>
              </ContentRow>
            </MenuContent>

            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
                {L.tovarAdd.cars.mesto[lan]} *
              </Typography>
              <ContentRow>
                <StyledFormControl
                  variant="filled"
                  sx={{ mb: 3, minWidth: 120 }}
                >
                  <InputLabel>{L.tovarAdd.cars.region[lan]} *</InputLabel>
                  <Select
                    value={region}
                    label="sum"
                    onChange={handleRegionChange}
                  >
                    {regions.map((Region) => (
                      <StyledMenuItem value={Region._id}>
                        {Region.name}
                      </StyledMenuItem>
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
            <Box sx={{ mt: 2, mb: 4 }}>
              <StyledButton
                onClick={handleSubmit(handlSubmit)}
                variant="contained"
                variant="contained"
              >
                {L.tovarAdd.cars.but12[lan]}
              </StyledButton>
            </Box>
          </Container>
        </Wrapper>
      </form>
    </>
  );
}
export default Home;

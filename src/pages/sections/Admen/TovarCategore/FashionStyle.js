import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AcceptMaxFiles } from "../../MyProfil/DropZovn";
import { MenuItem, Select, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { InputLabel, TextareaAutosize } from "@material-ui/core";
import Nav2 from "../../../../components/Nav2";
import { BackAdminFashion } from "../../../../components/Back";
import LoaderSpinner from "../../../../Loader/loader";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { Box } from "@mui/system";
import L from "../../../../locale/language.json";
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
import { useSnackbar } from "notistack";

function FashionStyle({ category }) {
  const lan = useSelector((state) => state.allLanguage);
  const history = useHistory();
  const fashion = category;
  const [area, setArea] = useState("");
  const [zagol, setZagol] = useState("");
  const [mobil, setMobil] = useState("clothes");
  const handleMobile = (e) => {
    setMobil(e.target.value);
  };

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar(L.tizim.tovar[lan], { variant });
  };

  const [razmer, setRazmer] = useState("");
  const [tur, setTur] = useState(" ");
  const handleTur = (e) => {
    setTur(e.target.value);
  };
  const [val, setVal] = useState([]);
  console.log(val);
  useEffect(() => {
    if (mobil !== "") {
      TexnicFunc();
    }
  }, [mobil]);
  const TexnicFunc = async () => {
    await axios
      .post(
        "http://dems.inone.uz/api/fashion-watches/get-pagin",
        {
          limit: 10,
          page: 1,
          search: "",
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => setVal(res.data.data.data));
  };
  const [novy, setNovy] = useState("new");
  const handleNovy = (e) => {
    setNovy(e.target.value);
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
        setLoading(false);
      })
      .catch((er) => console.log(er));
  };
  const gorodFetch = async (id) => {
   await axios
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
  const [jew, setJew] = useState("jewelry");
 
  console.log(jew)
  const [mak, setMak] = useState("perfumery");
 

  useEffect(() => {
    regionFetch();
  }, []);

  const [sena, setSena] = useState("");

  const [sum, setSum] = useState("uzs");
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);
  const handlSubmit = async (value) => {
    await axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          type: fashion,
          title: value.name,
          subtype: mobil,
          situation: novy,
          watch_model_id: tur,
          accessories_type: jew,
          beauty_type: mak,
          size: parseInt(value.raz),
          currency: sum,
          price: parseInt(value.sen),
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
        handleClickVariant("success")()
      })
      .catch(() => console.log(localStorage.getItem("token")));
  };

  const schema = yup.object({
    name: yup.string().required("This is required field"),
    raz: yup.string().required("This is required field"),
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
      raz: "",
      sen: "",
      textarea: "",
    },
  });

  const [loading, setLoading] = useState(true);
  return loading ? (
    <LoaderSpinner />
  ) : (
    <>
      <form>
        <Wrapper>
          <Nav2 />
          <MinNav />
          <BackAdminFashion />
          <Container>
            <Typography sx={{ mb: 3 }} variant="h4">
              {L.tovarAdd.fash.name[lan]}
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
                  <Select value={mobil} onChange={handleMobile}>
                    <StyledMenuItem value="clothes">
                      {L.tovarAdd.fash.clot.clot1[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="watches">
                      {L.tovarAdd.fash.clot.clot2[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="gifts">
                      {L.tovarAdd.fash.clot.clot3[lan]}
                    </StyledMenuItem>
                    <StyledMenuItem value="accessories">
                      {L.tovarAdd.fash.clot.clot4[lan]}{" "}
                    </StyledMenuItem>
                    <StyledMenuItem value="beauty-and-health">
                      {L.tovarAdd.fash.clot.clot5[lan]}
                    </StyledMenuItem>
                  </Select>
                </StyledFormControl>
                {mobil == "clothes" ? (
                  <></>
                ) : mobil === "watches" ? (
                  <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                    <Select value={tur} onChange={handleTur}>
                      {val.map((el) => (
                        <StyledMenuItem value={el._id}>{el.name}</StyledMenuItem>
                      ))}
                    </Select>
                  </StyledFormControl>
                ) : mobil === "gifts" ? (
                  <> </>
                ) : mobil === "accessories" ? (
                  <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                    <Select value={jew} onChange={(e) => setJew(e.target.value)}>
                      <StyledMenuItem value="jewelry">jewelry</StyledMenuItem>
                      <StyledMenuItem value="bags">bags</StyledMenuItem>
                      <StyledMenuItem value="other-accessories">other-accessories</StyledMenuItem>
                    </Select>
                  </StyledFormControl>
                ) : mobil === "beauty-and-health" ? (
                  <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                    <Select value={mak} onChange={(e) => setMak(e.target.value)}>
                      <StyledMenuItem value="makeup-accessories">makeup-accessories</StyledMenuItem>
                      <StyledMenuItem value="perfumery">perfumery</StyledMenuItem>
                    </Select>
                  </StyledFormControl>
                ) : (
                  <> </>
                )}
              </ContentRow>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={novy} onChange={handleNovy}>
                  <StyledMenuItem value="new">{L.tovarAdd.fash.now[lan]}</StyledMenuItem>
                  <StyledMenuItem value="old">В/У</StyledMenuItem>
                </Select>
              </StyledFormControl>
            </MenuContent>
            <MenuContent>
              <Typography sx={{ mb: 3 }} variant="h5">
                {L.tovarAdd.fash.raz[lan]}
              </Typography>
              <Controller
                name="raz"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    onChange={(e) => setRazmer(e.target.value)}
                    label={L.tovarAdd.fash.raz[lan]}
                    variant="filled"
                    type="number"
                    helperText={errors.raz?.message}
                    error={errors?.raz}
                    {...field}
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
export default FashionStyle;

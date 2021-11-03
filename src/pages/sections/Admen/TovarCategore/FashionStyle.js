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
import {
  Wrapper,
  Container,
  StyledButton,
  MenuContent,
  StyledTextField,
  ContentRow,
  StyledFormControl,
} from "../MaterialTovar/Tovar";

function FashionStyle({ category }) {
  const history = useHistory();
  const fashion = category;
  const [area, setArea] = useState("");
  const [zagol, setZagol] = useState("");
  const [mobil, setMobil] = useState("clothes");
  const handleMobile = (e) => {
    setMobil(e.target.value);
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
  const TexnicFunc = () => {
    axios
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

  const [sum, setSum] = useState("uzs");
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };

  const state = useSelector((state) => state.allImage);
  const itemImages = Object.values(state);
  const handlSubmit = (value) => {
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          type: fashion,
          title: value.name,
          subtype: mobil,
          situation: novy,
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
      .then((res) => {
        history.push("/okFilse");
        console.log(res);
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
    <form >
      <Wrapper>
        <Nav2 />
        <BackAdminFashion />
        <Container>
          <Typography sx={{ mb: 3 }} variant="h4">
            Детали моды
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
                  <MenuItem value="clothes">Clothe</MenuItem>
                  <MenuItem value="watches">watches</MenuItem>
                  <MenuItem value="gifts">gifts </MenuItem>
                  <MenuItem value="accessories">accessories </MenuItem>
                  <MenuItem value="beauty-and-health">
                    beauty-and-health{" "}
                  </MenuItem>
                </Select>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={novy} onChange={handleNovy}>
                  <MenuItem value="new">Новый</MenuItem>
                  <MenuItem value="old">В/У</MenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
            <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
              <Select value={tur} onChange={handleTur}>
                {val.map((el) => (
                  <MenuItem value={el._id}>{el.name}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h5">
              Размер
            </Typography>
            <Controller
              name="raz"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledTextField
                  sx={{ mb: 3 }}
                  onChange={(e) => setRazmer(e.target.value)}
                  label="Размер "
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
                    type="number"
                    helperText={errors.sen?.message}
                    error={errors?.sen}
                    {...field}
                  />
                )}
              />
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={sum} label="sum" onChange={handleSumChange}>
                  <MenuItem value="uzs">uzs</MenuItem>
                  <MenuItem value="usd">usd</MenuItem>
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
                <Select value={gorod} label="sum" onChange={handleGorodChange}>
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
          <Box>
            <StyledButton
              onClick={handleSubmit(handlSubmit)}
              sx={{ mt: 4, display: "inline-block" }}
              variant="contained"
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
export default FashionStyle;

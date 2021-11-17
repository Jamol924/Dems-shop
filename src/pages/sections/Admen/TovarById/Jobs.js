import { useHistory } from "react-router-dom";
import {  BackAdminJobs, BackTovarByID } from "../../../../components/Back";
import React, { useState, useEffect } from "react";
import Nav2 from "../../../../components/Nav2";
import LoaderSpinner from "../../../../Loader/loader";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import L from "../../../../locale/language.json"
import { useSelector } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import { Box } from "@mui/system";
import {
  Typography,
  Select,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import {
  Container,
  MenuContent,
  Wrapper,
  StyledTextField,
  ContentRow,
  StyledFormControl,
  StyledButton,
  StyledMenuItem
} from "../MaterialTovar/Tovar";
import MinNav from "../../../../components/common/MineNavbar/MinNav";

function Jobs({ category, dataCard }) {
  const lan = useSelector(state => state.allLanguage)  
  const history = useHistory();
  const job = category;
  const [zagol, setZagol] = useState("");
  const [tur, setTur] = useState(dataCard.jobs);
  const handleTur = (e) => {
    setTur(e.target.value);
  };
  const [qaror, setQaror] = useState(dataCard.mission_type);
  const handleQaror = (e) => {
    setQaror(e.target.value);
  };
  const [pостоянная, setPostayan] = useState(dataCard.employment_type);
  const handleПостоянная = (e) => {
    setPostayan(e.target.value);
  };
  const [Частичная, setЧастичная] = useState(dataCard.job_type);
  const handleЧастичная = (e) => {
    setЧастичная(e.target.value);
  };
  const [sum, setSum] = useState(dataCard.currency);
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };
  const [gorod, setGorod] = useState(dataCard.city_id);
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState(dataCard.region_id);
  const [regions, setRegions] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
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

  const [area, setArea] = useState("");

  const handlSubmit = (value) => {
    axios
      .post(
        "http://dems.inone.uz/api/ad/update",
        {
          type: dataCard.type,
          _id: dataCard._id,
          title: value.name,
          jobs: tur,
          mission_type: qaror,
          employment_type: pостоянная,
          job_type: Частичная,
          salary_from: parseInt(value.ot),
          salary_to: parseInt(value.ke),
          currency: sum,
          region_id: region,
          city_id: gorod,
          description: value.textarea,
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
    ot: yup.string().required("This is required field"),
    ke: yup.string().required("This is required field"),
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
      ot: dataCard.salary_from,
      ke: dataCard.salary_to,
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
        <BackAdminJobs />
        <Container>
          <Typography sx={{ mb: 3 }} variant="h4">
          {L.tovarAdd.jobs.name[lan]}
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
              <StyledFormControl variant="filled" sx={{mb:3, minWidth: 120 }}>
                <Select value={tur} onChange={handleTur}>
                  <StyledMenuItem value="retail-sales">{L.tovarAdd.jobs.roz1[lan]} </StyledMenuItem>
                  <StyledMenuItem value="transport-logistics">
                    {L.tovarAdd.jobs.roz2[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="construction">{L.tovarAdd.jobs.roz3[lan]} </StyledMenuItem>
                  <StyledMenuItem value="bars-and-restaurants">
                     {L.tovarAdd.jobs.roz4[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="jurisprudence-and-accounting">
                    {L.tovarAdd.jobs.roz5[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="security">{L.tovarAdd.jobs.roz6[lan]} </StyledMenuItem>
                  <StyledMenuItem value="house-stuff">{L.tovarAdd.jobs.roz7[lan]} </StyledMenuItem>
                  <StyledMenuItem value="tourism-entertainment-fun-games">
                    {L.tovarAdd.jobs.roz8[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="education">{L.tovarAdd.jobs.roz9[lan]} </StyledMenuItem>
                  <StyledMenuItem value="it-electronics-and-technology">
                    {L.tovarAdd.jobs.roz10[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="medicine-and-pharmacy">
                    {L.tovarAdd.jobs.roz11[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="culturre-and-art">{L.tovarAdd.jobs.roz12[lan]} </StyledMenuItem>
                  <StyledMenuItem value="other">{L.tovarAdd.jobs.roz13[lan]} </StyledMenuItem>
                </Select>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={qaror} onChange={handleQaror}>
                  <StyledMenuItem value="offer">{L.tovarAdd.jobs.offer1[lan]} </StyledMenuItem>
                  <StyledMenuItem value="search"> {L.tovarAdd.jobs.offer2[lan]} </StyledMenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={pостоянная} onChange={handleПостоянная}>
                  <StyledMenuItem value="part-time-employment">
                    {L.tovarAdd.jobs.post1[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="full-time-employment">
                    {L.tovarAdd.jobs.post2[lan]} 
                  </StyledMenuItem>
                </Select>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={Частичная} onChange={handleЧастичная}>
                  <StyledMenuItem value="permanent-employment">
                    {L.tovarAdd.jobs.per1[lan]} 
                  </StyledMenuItem>
                  <StyledMenuItem value="temporary-employment">
                    {L.tovarAdd.jobs.per2[lan]} 
                  </StyledMenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h5">
            {L.tovarAdd.jobs.zarplata[lan]}
            </Typography>
            <ContentRow>
              <Controller
                name="ot"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label={L.tovarAdd.jobs.ot[lan]}
                    variant="filled"
                    onChange={(e) => setFrom(e.target.value)}
                    helperText={errors.ot?.message}
                    error={errors?.ot}
                    {...field}
                  />
                )}
              />
              <Controller
                name="ke"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label={L.tovarAdd.jobs.k[lan]}
                    variant="filled"
                    onChange={(e) => setTo(e.target.value)}
                    helperText={errors.ke?.message}
                    error={errors?.ke}
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
            {L.tovarAdd.cars.mesto[lan]}
            </Typography>
            <ContentRow>
              <StyledFormControl variant="filled" sx={{mb:3, minWidth: 120 }}>
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
                <Select value={gorod} label="sum" onChange={handleGorodChange}>
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

export default Jobs;

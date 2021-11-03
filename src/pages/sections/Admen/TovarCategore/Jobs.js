import { useHistory } from "react-router-dom";
import { BackAdminElictron, BackAdminJobs } from "../../../../components/Back";
import React, { useState, useEffect } from "react";
import Nav from "../../../../components/Nav";
import Nav2 from "../../../../components/Nav2";
import LoaderSpinner from "../../../../Loader/loader";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { Box } from "@mui/system";
import {
  Typography,
  Select,
  MenuItem,
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
} from "../MaterialTovar/Tovar";

function Jobs({ category }) {
  const history = useHistory();
  const job = category;
  const [zagol, setZagol] = useState("");
  const [tur, setTur] = useState("retail-sales");
  const handleTur = (e) => {
    setTur(e.target.value);
  };
  const [qaror, setQaror] = useState("offer");
  const handleQaror = (e) => {
    setQaror(e.target.value);
  };
  const [pостоянная, setPostayan] = useState("part-time-employment");
  const handleПостоянная = (e) => {
    setPostayan(e.target.value);
  };
  const [Частичная, setЧастичная] = useState("permanent-employment");
  const handleЧастичная = (e) => {
    setЧастичная(e.target.value);
  };
  const [sum, setSum] = useState("uzs");
  const handleSumChange = (event) => {
    setSum(event.target.value);
  };
  const [gorod, setGorod] = useState("");
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState("");
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
        "http://dems.inone.uz/api/ad/create",
        {
          type: job,
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
        history.push("/okFilse");
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
      ot: "",
      ke: "",
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
        <BackAdminJobs />
        <Container>
          <Typography sx={{ mb: 3 }} variant="h4">
            Детали вакансии
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
                <Select value={tur} onChange={handleTur}>
                  <MenuItem value="retail-sales">Розничные продажи</MenuItem>
                  <MenuItem value="transport-logistics">
                    Транспортная логистика
                  </MenuItem>
                  <MenuItem value="construction">Строительство</MenuItem>
                  <MenuItem value="bars-and-restaurants">
                    Бары & ресторан
                  </MenuItem>
                  <MenuItem value="jurisprudence-and-accounting">
                    Юриспруденция и бухгалтерский учет
                  </MenuItem>
                  <MenuItem value="security">Безопасность</MenuItem>
                  <MenuItem value="house-stuff">Домашние вещи</MenuItem>
                  <MenuItem value="tourism-entertainment-fun-games">
                    tourism-entertainment-fun-games
                  </MenuItem>
                  <MenuItem value="education">education</MenuItem>
                  <MenuItem value="it-electronics-and-technology">
                    it-electronics-and-technology
                  </MenuItem>
                  <MenuItem value="medicine-and-pharmacy">
                    medicine-and-pharmacy
                  </MenuItem>
                  <MenuItem value="culturre-and-art">culturre-and-art</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </Select>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={qaror} onChange={handleQaror}>
                  <MenuItem value="offer">offer</MenuItem>
                  <MenuItem value="search ">search </MenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={pостоянная} onChange={handleПостоянная}>
                  <MenuItem value="part-time-employment">
                    Постоянная занятость
                  </MenuItem>
                  <MenuItem value="full-time-employment">
                    Временное трудоустройство
                  </MenuItem>
                </Select>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ mt: 3, minWidth: 120 }}>
                <Select value={Частичная} onChange={handleЧастичная}>
                  <MenuItem value="permanent-employment">
                    permanent-employment
                  </MenuItem>
                  <MenuItem value="temporary-employment">
                    temporary-employment
                  </MenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h5">
              Зарплата
            </Typography>
            <ContentRow>
              <Controller
                name="ot"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField
                    sx={{ mb: 3 }}
                    label="От "
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
                    label="К "
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

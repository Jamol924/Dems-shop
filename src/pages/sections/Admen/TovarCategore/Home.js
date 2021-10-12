import React, { useState, useEffect } from "react";
import Nav from "../../../../components/Nav";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import axios from "axios";

function Home() {
  const [zagol, setZagol] = useState("");
  const handleZagol = (el) => {
    setZagol(el.target.value);
  };

  const [glavne, setGlavne] = useState("Главная");
  const handleGlavneChange = (el) => {
    setGlavne(el.target.value);
  };
  const [arend, setArend] = useState("Аренда");
  const handleArend = (el) => {
    setArend(el.target.value);
  };

  const [tips, setTips] = useState("");
  const handleTips = (el) => {
    setTips(el.target.value);
  };

  const [tip, setTip] = useState([]);
  const handleApi = async () => {
    fetch("http://dems.inone.uz/api/home-plan/get")
      .then((res) => res.json())
      .then((res) => setTip(res.data))
      .catch((err) => console.log("er", err));
  };

  const [komnat, setKomnat] = useState("");
  const handleKomnat = (el) => {
    setKomnat(el.target.value);
  };

  const [novy, setNovy] = useState("");
  const handleNovyChange = (event) => {
    setNovy(event.target.value);
  };
  const [god, setGod] = useState("");
  const handleGod = (event) => {
    setGod(event.target.value);
  };
  const [has, setHas] = useState("");
  const handleHas = (event) => {
    setHas(event.target.value);
  };
  const [visota, setVisota] = useState("");
  const handleVisota = (event) => {
    setVisota(event.target.value);
  };
  const [etaj, setEtaj] = useState("");
  const handleEtaj = (event) => {
    setEtaj(event.target.value);
  };
  const [etajnost, setEtajnost] = useState("");
  const handleEtajnost = (event) => {
    setEtajnost(event.target.value);
  };
  const [ryadom, setRyadom] = useState("");
  const handleRyadom = (event) => {
    setRyadom(event.target.value);
  };
  const [razmer, setRazmer] = useState("");
  const [dostup, setDostup] = useState("");
  const [sena, setSena] = useState("");

  const [sum, setSum] = useState("uzs");
  const handleSumChange = (e) => {
    setSum(e.target.value);
  };

  const [gorod, setGorod] = useState("");
  const [gorods, setGorods] = useState([]);
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);

  console.log("Region_Name", regions.map((el) => (el.name)));

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
  const [textarea, setTextarea] = useState("");
  const handleTextareaChange = (el) => {
    setTextarea(el.target.value);
  };

  const [selectedFile, setSelectedFile] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
  };

  const [images, setImages] = useState("");
  const img = [images.data?.data.path];
  console.log(img);
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
        console.log(res);
        setImages(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleApi();
    regionFetch();
    handleApi();
  }, []);

  console.log(
    "API Malumot : ",
    zagol,
    glavne,
    arend,
    tips,
    komnat,
    novy,
    god,
    has,
    visota,
    etaj,
    etajnost,
    ryadom,
    razmer,
    dostup,
    sena,
    sum,
    gorod,
    region,
    textarea,
    img,

  );

  const handleSubmit = (e) => {
    console.log(localStorage.getItem("token"));
    e.preventDefault();
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          subtype: "home",
          sell_property: "sell",
          home_plan_name: "smth2",
          count_room: 5,
          situation: "new",
          year_house_build: 2015,
          has_furniture: false,
          celling_height: 3,
          house_renovation: "repaired",
          construction: "brick",
          has_additional_cost: true,
          floor: 4,
          floor_of_house: 5,
          appliances: ["6023b32d3e3e3fa9bd63dd54"],
          appliance_names: ["Muzlatgich"],
          located_near: "Somewhere famous",
          size: 50,
          available_size: 30,
          price: 50000,
          max_price: null,
          currency: sum,
          state: "pending",
          brand_name: null,
          model_name: null,
          fuel: null,
          condition: null,
          color: null,
          region_name: "Tashkent",
          city_name: "Yunusobod",
          description: textarea,
          images: img,
          created_at: null,
          expired_at: null,
          feature_expired_at: null,
          _id: "60243a121ee96c65744ed5fe",
          type: "home",
          title: zagol,
          home_plan: "60239d33c0ed5885a2e54052",
          region_id: region,
          city_id: gorod,
          created_by: "6023df8d671f950f65cdd8d2",
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      )
      .then((res) => console.log("hellool  ", res))
      .catch(() => console.log(localStorage.getItem("token")));
  };

  return (
    <>
      <Wrapper>
        <Nav />
        <Container>
          <Typography sx={{ mb: 3 }} variant="h4">
            информация о продукте
          </Typography>
          <MenuContent>
            <StyledTextField
              sx={{ mb: 3 }}
              label="заголовок объявления*"
              variant="filled"
              value={zagol}
              onChange={handleZagol}
            />
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={glavne} onChange={handleGlavneChange}>
                  <MenuItem value="Главная">Главная</MenuItem>
                  <MenuItem value="Квартера">Квартера</MenuItem>
                  <MenuItem value="Земля">Земля</MenuItem>
                  <MenuItem value="Гараж">Гараж</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={arend} onChange={handleArend}>
                  <MenuItem value="Аренда">Аренда</MenuItem>
                  <MenuItem value="Аренда посуточно">Аренда посуточно</MenuItem>
                  <MenuItem value="Продажа">Продажа</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel>тип строения</InputLabel>
                <Select value={tips} label="sum" onChange={handleTips}>
                  {tip.map((tp) => (
                    <MenuItem value={tp._id}>{tp.name}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>
              <TextField
                value={komnat}
                onChange={handleKomnat}
                sx={{ mb: 3 }}
                label="количество комнат*"
                variant="filled"
              />
            </ContentRow>
            <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>новий*</InputLabel>
              <Select value={novy} label="Age" onChange={handleNovyChange}>
                <MenuItem value="new">новий</MenuItem>
                <MenuItem value="old">old</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </StyledFormControl>
            <TextField
              value={god}
              onChange={handleGod}
              sx={{ mb: 3 }}
              label="Год постройки /сдачи"
              variant="filled"
            />
            <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Has furniture*</InputLabel>
              <Select value={has} label="has" onChange={handleHas}>
                <MenuItem value="Has furniture">Has furniture</MenuItem>
                <MenuItem value="No furniture">No furniture</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </StyledFormControl>
            <TextField
              value={visota}
              onChange={handleVisota}
              sx={{ mb: 3 }}
              label="высота потолков (m)"
              variant="filled"
            />
            <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>отремонтирован*</InputLabel>
              <Select value={has} label="has" onChange={handleHas}>
                <MenuItem value="отремонтирован">отремонтирован</MenuItem>
                <MenuItem value="Не пьемонтируется">Не пьемонтируется</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </StyledFormControl>
            <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>кирпичный*</InputLabel>
              <Select value={has} label="has" onChange={handleHas}>
                <MenuItem value="кирпичный">кирпичный</MenuItem>
                <MenuItem value="панельный">панельный</MenuItem>
                <MenuItem value="Монолитный">Монолитный</MenuItem>
                <MenuItem value="Блочный">Блочный</MenuItem>
                <MenuItem value="Другой">Другой</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </StyledFormControl>
            <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Have brokerage fee*</InputLabel>
              <Select value={has} label="has" onChange={handleHas}>
                <MenuItem value="Has furniture">Have brokerage fee</MenuItem>
                <MenuItem value="No brokerage fee">No brokerage fee</MenuItem>
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </StyledFormControl>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h4">
              Этаж
            </Typography>
            <TextField
              sx={{ mb: 2 }}
              label="Этаж"
              value={etaj}
              onChange={handleEtaj}
            />
            <TextField
              label="Этажность дома"
              value={etajnost}
              onChange={handleEtajnost}
            />
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h4">
              Comforts
            </Typography>

            <TextField
              label="Рядом есть"
              value={ryadom}
              onChange={handleRyadom}
            />
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h4">
              Размер
            </Typography>
            <TextField
              label="Размер (m)2"
              onChange={(e) => setRazmer(e.target.value)}
            />
            <TextField
              label="Доступный (m)2"
              onChange={(e) => setDostup(e.target.value)}
            />
          </MenuContent>

          <MenuContent>
            <Typography sx={{ mb: 1 }} variant="h5">
              цена*
            </Typography>
            <Grid spacing={2}>
              <StyledTextField
                onChange={(e) => setSena(e.target.value)}
                label="сена*"
                variant="filled"
              />
              <FormHelperText>With label + helper text</FormHelperText>

              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={sum} label="sum" onChange={handleSumChange}>
                  <MenuItem value={"uzs"}>uzs</MenuItem>
                  <MenuItem value={"usd"}>usd</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
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
                <FormHelperText>With label + helper text</FormHelperText>
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
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 1 }} variant="h5">
              описане
            </Typography>
            <TextareaAutosize
              style={{
                height: "200px",
                outline: "none",
                fontSize: "17px",
                padding: "15px",
                borderRadius: "4px",
                maxWidth: "1000px",
              }}
              placeholder="Добавить краткое описане"
              value={textarea}
              onChange={handleTextareaChange}
            />
          </MenuContent>

          <MenuTitle>
            <Typography variant="h5">
              Загрузите максимум 15 изображений
            </Typography>
            <Typography variant="h7">
              Загрузите максимум 15 изображений
            </Typography>
          </MenuTitle>
          <Box
            component="span"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 7,
              border: "1px dashed grey",
              borderRadius: "4px",
            }}
          >
            <Typography sx={{ mb: 1 }} variant="h5">
              фотографии
            </Typography>
            <Typography sx={{ mb: 1 }} variant="h7">
              Загрузите максимум 15 изображений
            </Typography>

            <input type="file" id="images" hidden onChange={handleImgChange} />
            <StyledButton variant="contained" onClick={changeHandler}>
              <label htmlFor="images">выбрать изображение</label>
            </StyledButton>
          </Box>
          <Box>
            <StyledButton
              onClick={handleSubmit}
              sx={{ mt: 4, display: "inline-block" }}
              variant="contained"
            >
              опубликовать
            </StyledButton>
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
const Container = styled.div`
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 120px;
  padding: 20px 150px;
  @media (max-width: 765px) {
    padding: 20px 50px;
  }
`;
const MenuContent = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;
const MenuTitle = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  && {
    background: #f85c70;

    &:hover {
      background: #f32e48;
    }
  }
`;
const StyledFormControl = styled(FormControl)`
  .MuiFilledInput-input {
    background: white;
  }
  .MuiFilledInput-input {
    background: white;
  }
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
  }
  && {
    .MuiInputBase-root.Mui-focused fieldset {
      border: 1px solid rgb(153, 149, 149);
    }
  }
  width: 45%;
  margin: 0px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 20px;
  }
`;

const StyledTextField = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
  }
  .MuiFilledInput-input {
    background: white;
  }
  && {
    .MuiInputBase-root.Mui-focused fieldset {
      border: 1px solid rgb(153, 149, 149);
    }
  }
`;
const Range = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

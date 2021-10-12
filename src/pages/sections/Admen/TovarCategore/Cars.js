import React, { useState, useEffect } from "react";
import Nav from "../../../../components/Nav";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
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
import { Box } from "@mui/system";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoreProduct } from "../../../../redux/active/productActions";

function Cars(props) {
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

  const [informase, setInformase] = useState("");
  const handleInformasChange = (event) => {
    setInformase(event.target.value);
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

  const [toplivo, setToplivo] = useState("");
  const handleTolivoChange = (event) => {
    setToplivo(event.target.value);
  };

  const [novy, setNovy] = useState("");
  const handleNovyChange = (event) => {
    setNovy(event.target.value);
  };

  const [sena, setSena] = useState("");
  const handleSenaChange = (el) => {
    setSena(el.target.value);
  };
  const [sum, setSum] = useState("");
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

  const handleSubmit = (e) => {
    console.log(localStorage.getItem("token"));
    e.preventDefault();
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          brand_id: age,
          city_id: gorod,
          color: alignment,
          condition: novy,
          currency: sum,
          description: textarea,
          fuel: toplivo,
          images: img,
          model_id: model,
          price: parseInt(sena),
          region_id: region,
          title: informase,
          type: cars,
          year_out: parseInt(god),
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
  const dataCurrens = [
    {
      id: "usd",
      nameCuren: "usd",
    },
    {
      id: "eur",
      nameCuren: "eur",
    },
  ];
  console.log("sum", sum);

  return CategoreRispons.length === 0 ? (
    "Loading..."
  ) : (
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
              value={informase}
              onChange={handleInformasChange}
            />

            <ContentRow>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel>Марка*</InputLabel>
                <Select value={age} onChange={handleChange}>
                  {CategoreRispons.data.map((Categor) => (
                    <MenuItem value={Categor._id}>{Categor.name}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
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
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>

          <MenuContent>
            <StyledTextField
              value={god}
              type="number"
              onChange={handleGodChange}
              sx={{ mb: 3 }}
              label="год впуска*"
              variant="filled"
            />
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Toplivo</InputLabel>
                <Select
                  value={toplivo}
                  label="Age"
                  onChange={handleTolivoChange}
                >
                  <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                  <MenuItem value={"Daevo"}>Daywo</MenuItem>
                  <MenuItem value={"Baz"}>Baz</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
              </StyledFormControl>

              <StyledFormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Novy*</InputLabel>
                <Select value={novy} label="Age" onChange={handleNovyChange}>
                  <MenuItem value="new">Chevrolet</MenuItem>
                  <MenuItem value="old">Daywo</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
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
              <ToggleButton sx={{backgroundColor:"white", borderRadius:"none", width:"60px", height:"60px", marginRight:"20px"}} value="white" aria-label="left aligned">
              </ToggleButton>
              <ToggleButton sx={{backgroundColor:"red", width:"60px", height:"60px", marginRight:"20px"}} value="red" aria-label="centered">
              </ToggleButton>
              <ToggleButton sx={{backgroundColor:"green", width:"60px", height:"60px", marginRight:"20px"}} value="green" aria-label="right aligned">
              </ToggleButton>
              <ToggleButton sx={{backgroundColor:"black", width:"60px", height:"60px", marginRight:"20px"}} value="black" aria-label="right aligned">
              </ToggleButton>
              <ToggleButton sx={{backgroundColor:"yellow", width:"60px", height:"60px", marginRight:"20px"}} value="yellow" aria-label="right aligned">
              </ToggleButton>
              
            </ToggleButtonGroup>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 1 }} variant="h5">
            цена*
            </Typography>
            <Grid spacing={2}>
              <StyledTextField
                value={sena}
                onChange={handleSenaChange}
                label="сена*"
                variant="filled"
              />
              <FormHelperText>With label + helper text</FormHelperText>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel>цена*</InputLabel>
                <Select value={sum} label="sum" onChange={handleSumChange}>
                  {dataCurrens.map((curren) => (
                    <MenuItem value={"usd"}>{curren.nameCuren}</MenuItem>
                  ))}
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
export default Cars;

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
  width:100%;
  height: 100%;
  background: white;
`

import React, { useState, useEffect } from "react";
import { MenuItem, Select, Typography } from "@mui/material";
import Nav2 from "../../../../components/Nav2";
import {
  Wrapper,
  Container,
  StyledButton,
  MenuContent,
  StyledTextField,
  ContentRow,
  StyledFormControl,
} from "../MaterialTovar/Tovar";
import axios from "axios";
import { FailImages } from "../../../../components/common/FailImages";
import { Box } from "@mui/system";
import { InputLabel,TextareaAutosize } from "@material-ui/core";
import { BackAdminAgriculture } from "../../../../components/Back";
import LoaderSpinner from "../../../../Loader/loader";

function Agriculture({categore}) {
  const agricul = categore
  const [area, setArea] = useState("");
  const [zagol, setZagol] = useState("");
  const [mobil, setMobil] = useState("melon-crops");
  const handleMobile = (e) => {
    setMobil(e.target.value);
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
        setLoading(false)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://dems.inone.uz/api/ad/create",
        {
          type: agricul,
          title: zagol,
          agriculture: mobil,
          currency: sum,
          price: parseInt(sena),
          region_id: region,
          city_id: gorod,
          description: area,
          images: ["/uploads/file-a241f032d0092a7b06b7795d41bbf81e.jpg"],
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

  const [loading, setLoading] = useState(true);
  return loading ? (
    <LoaderSpinner />
  ) :  (
    <>
      <Wrapper>
        <Nav2 />
        <BackAdminAgriculture />
        <Container>
          <Typography sx={{ mb: 3 }} variant="h4">
          Сельское хозяйство
          </Typography>
          <MenuContent>
            <StyledTextField
              sx={{ mb: 3 }}
              label="заголовок объявления*"
              variant="filled"
              onChange={(e) => setZagol(e.target.value)}
            />
            <ContentRow>
              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={mobil} onChange={handleMobile}>
                  <MenuItem value="melon-crops">melon-crops</MenuItem>
                  <MenuItem value="cereals">cereals</MenuItem>
                  <MenuItem value="fruits">fruits </MenuItem>
                  <MenuItem value="others">others</MenuItem>
                </Select>
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h5">
              цена*
            </Typography>
            <ContentRow>
              <StyledTextField
                sx={{ mb: 3 }}
                onChange={(e) => setSena(e.target.value)}
                label="сена*"
                variant="filled"
                type="number"
              />
              {/* <FormHelperText>With label + helper text</FormHelperText> */}

              <StyledFormControl variant="filled" sx={{ minWidth: 120 }}>
                <Select value={sum} label="sum" onChange={handleSumChange}>
                  <MenuItem value="uzs">uzs</MenuItem>
                  <MenuItem value="usd">usd</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
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
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
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
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </StyledFormControl>
            </ContentRow>
          </MenuContent>
          <MenuContent>
            <Typography sx={{ mb: 3 }} variant="h5">
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
                border: "none",
              }}
              placeholder="Добавить краткое описане"
              onChange={(e) => setArea(e.target.value)}
            />
          </MenuContent>
          <FailImages />
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
export default Agriculture;



import React, {useState, useEffect } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { Typography } from "@mui/material";
import {
  MenuTitle,
  StyledButton,
} from "../../pages/sections/Admen/MaterialTovar/Tovar";

export const FailImages = () => {

  const [images, setImages] = useState("");
  const img = [images.data?.data.path];
  console.log("DIYMAT", img);
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
        setImages(res)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <MenuTitle>
        <Typography variant="h5">Загрузите максимум 15 изображений</Typography>
        <Typography variant="h7">Загрузите максимум 15 изображений</Typography>
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
        <Typography sx={{ mb: 2 }} variant="h5">
          фотографии
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h7">
          Загрузите максимум 15 изображений
        </Typography>

        <input type="file" id="images" hidden onChange={handleImgChange} />
        <StyledButton variant="contained">
          <label htmlFor="images">выбрать изображение</label>
        </StyledButton>
      </Box>
    </div>
  );
};

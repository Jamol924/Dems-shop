import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { MenuTitle, StyledButton, StyledColumn } from "../Admen/MaterialTovar/Tovar";
import { useDispatch, useSelector } from "react-redux";
import { setImag } from "../../../redux/active/productActions";
import L from "../../../locale/language.json"

const uploader = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://dems.inone.uz/api/upload-file",
      formData,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );

    return response.data.data.path;
  } catch (error) {
    console.log(error);
    throw new Error("Can't upload file");
  }
};

const uploaderFiles = async (fileList = []) => {
  try {
    const responses = await Promise.all(fileList.map((file) => uploader(file)));
    return responses;
  } catch (error) {
    console.log(error);
  }
};

export const AcceptMaxFiles = () => {
  const lan = useSelector(state => state.allLanguage)  
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 13,
  });

  useEffect(() => {
    (async () => {
      const result = await uploaderFiles(acceptedFiles);
      setFiles(result);
    })();
  }, [acceptedFiles]);

  useEffect(() => {
    dispatch(setImag(files));
  }, [files]);

  const acceptedFileItems = useMemo(
    () =>
      files.length > 12 ? (
        <h1>Siz kup surat kiritdingiz</h1>
      ) : (
        files.map((file) => <img src={`http://dems.inone.uz/api/${file}`} />)
      ),

    [files]
  );

  return (
    <>
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
        {L.tovarAdd.cars.foto[lan]}
        </Typography>
        <Typography sx={{ mb: 1, textAlign:"center" }} variant="h7">
        {L.tovarAdd.cars.maxImg[lan]}
        </Typography>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <StyledButton variant="contained">
            <label htmlFor="images">{L.tovarAdd.cars.but1[lan]}</label>
          </StyledButton>
        </div>
        <StyledColumn>{acceptedFileItems}</StyledColumn>
      </Box>
    </>
  );
};

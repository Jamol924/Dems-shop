import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import L from "../../../locale/language.json";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import {
  StyledButton,
  StyledColumn,
} from "../../../pages/sections/Admen/MaterialTovar/Tovar";

const FileUploader = () => {
  const file = null;
  const [state, setState] = useState({ files: [] });

  const OnChangeHandler = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];

      let reader = new FileReader();
      reader.onloadend = (e) => {
        setState({
          files: [...state.files, { file, url: e.currentTarget.result }],
        });
      };
      OnSubmitAllFiles() 

      reader.readAsDataURL(file)
    }
  };

  const OnSubmitAllFiles = async (e) => {
    const formData = new FormData();
    state.files.map((f, index) => {
      formData.append("files[]", state.files[index].file);
    });
    formData.append("sayHi", e);
    console.log(e)
    try {
      await axios.post(
        "http://dems.inone.uz/api/upload-file",
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      ).then((e) => console.log(e))
    } catch (error) {
      console.log(error, "Xato");
    }
  };

  const OnDeleteFile = (file) => {
    let files = state.files;
    files.splice(file, 1);
    setState({ files });
  };

  const lan = useSelector((state) => state.allLanguage);
  return (
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
      <Typography sx={{ mb: 1, textAlign: "center" }} variant="h7">
        {L.tovarAdd.cars.maxImg[lan]}
      </Typography>
      <input
        style={{ display: "none" }}
        id="username"
        type="file"
        onChange={(e) => OnChangeHandler(e)}
        multiple="true"
      />
      <StyledButton variant="contained">
        <label htmlFor="username">{L.tovarAdd.cars.but1[lan]}</label>
      </StyledButton>
      <StyledColumn>
        <FileLister files={state.files} deleteFile={OnDeleteFile.bind(this)} />
      </StyledColumn>
    </Box>
  );
};

const FileLister = ({ files, deleteFile }) => {
  const state = { files: files };
  return (
    <>
      {state.files.map((file, index) => {
        return (
          <>
            <img src={file.url} />

            <Button
              type="button"
              onClick={(e) => {
                deleteFile(index);
              }}
              variant="contained"
              color="error"
            >
              <DeleteIcon />
            </Button>
          </>
        );
      })}
    </>
  );
};

export default FileUploader;

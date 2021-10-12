import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

function ProductCreate() {
  return (
    <div>
      <Wrapper>
        <Typography>Rasim</Typography>
        <Typography
          sx={{
            mb: 2,
            mt: 3,
            fontSize: 14,
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: "Roboto",
          }}
          component="h7"
        >
          Birinchi surat Eloningizni boshi buladi
        </Typography>
        <div style={{ width: "100%" }}>
          <Grid
            style={{ width: "100%" }}
            container
            spacing={{ xs: 4, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={3} md={2}>
              <div
                style={{
                  width: 140,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "1px 1px 5px #ccc",
                  borderRadius: 4,
                }}
              >
                <AddAPhotoIcon />
              </div>
            </Grid>
            <Grid item xs={2} sm={3} md={2}>
              <div
                style={{
                  width: 140,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "1px 1px 5px #ccc",
                  borderRadius: 4,
                }}
              >
                <AddAPhotoIcon />
              </div>
            </Grid>
            <Grid item xs={2} sm={3} md={2}>
              <div
                style={{
                  width: 140,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "1px 1px 5px #ccc",
                  borderRadius: 4,
                }}
              >
                <AddAPhotoIcon />
              </div>
            </Grid>
            <Grid item xs={2} sm={3} md={2}>
              <div
                style={{
                  width: 140,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "1px 1px 5px #ccc",
                  borderRadius: 4,
                }}
              >
                <AddAPhotoIcon />
              </div>
            </Grid>
            <Grid item xs={2} sm={2} md={3}>
              <div
                style={{
                  width: 140,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "1px 1px 5px #ccc",
                  borderRadius: 4,
                }}
              >
                <AddAPhotoIcon />
              </div>
            </Grid>
          </Grid>
        </div>
      </Wrapper>
    </div>
  );
}

export default ProductCreate;

const Wrapper = styled.div`
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
`;

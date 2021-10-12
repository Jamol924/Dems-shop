import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import datas from "./dataCategore";
import { Link } from "react-router-dom";

function Categore() {
  return (
    <div>
      <Wrapper>
        <Title>Kategore</Title>
        <Grid container spacing={2}>
          {datas.map((data) => (
            <Grid item xs={4}>
              <Link to={"admen/"+data.id}>
                <Card>
                  <CardTitle>{data.title}</CardTitle>
                  <CardImg>{data.img}</CardImg>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </div>
  );
}

export default Categore;

const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  position: relative;
  top: 120px;
`;
const Title = styled.div`
  font-size: 20px;
`;
const Card = styled.div`
  border: 1px solid red;
  height: 80px;
`;
const CardImg = styled.div`
  position: absolute;
  height: 100%;
  object-fit: cover;
`;
const CardTitle = styled.div`
  position: absolute;
  top: 2;
  left: 4;
  z-index: 4;
`;

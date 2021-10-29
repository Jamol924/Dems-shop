import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import datas from "../pages/sections/Admen/Categore/dataCategore";
import { useSelector } from "react-redux";

const data = datas.map((elm) => elm.title);

export const Cars = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[0]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const CarsLink = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      {data[0]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackHome = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[1]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackElictronic = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[2]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackJobs = () => {
  const productCard = useSelector((state) => state.productCard);

  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" to="/">
              Главная часть
            </Link>
            {productCard && (
              <Link underline="hover" to={productCard?.type}>
                {productCard?.type}
              </Link>
            )}
            <Typography>card</Typography>
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackFashion = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[4]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackChildren = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[5]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};

export const BackBusines = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[6]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAgriculture = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      {data[7]}
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackMyProfl = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      MyProfel
    </Typography>,
  ];
  return (
    <>
      <BackCard style={{ marginTop: "-100px" }}>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackSetting = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      Settings
    </Typography>,
  ];
  return (
    <>
      <BackCard style={{ marginTop: "-100px" }}>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdmin = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      Admin_panel
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminHome = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      home
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminElictron = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Elictronic
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminJobs = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Jobs
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminFashion = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Fashion_Style
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminChildren = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Children-World
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminBusines = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Business
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackAdminAgriculture = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Link underline="hover" to="/admen">
      Admin_panel
    </Link>,
    <Typography key="3" color="text.primary">
      Agriculture
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const Back = () => {
  const breadcrumbs = [
    <Link underline="hover" to="/">
      головная часть
    </Link>,
    <Typography key="3" color="text.primary">
      отдел поиска
    </Typography>,
  ];
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
const BackCard = styled.div`
  margin-top: 80px;
  padding: 40px 50px;
`;

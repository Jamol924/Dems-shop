import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import datas from "../pages/sections/Admen/Categore/dataCategore";
import { useSelector } from "react-redux";
import L from "../locale/language.json";

const data = datas.map((elm) => elm.title.uz);

export const Cars = () => {
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
export const BackTovarByID = () => {
  const lan = useSelector((state) => state.allLanguage);
  const allSetElim = useSelector((state) => state.allSetElim);

  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" to="/">
              {L.glavne[lan]}
            </Link>
            {allSetElim.data?.data && (
              <Link underline="hover" to={"/myProfil"}>
               {L.moyprfel[lan]}
              </Link>
            )}
            {allSetElim.data?.data && (
              <Typography>{allSetElim.data?.data.type}</Typography>
            )}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackJobs = () => {
  const lan = useSelector((state) => state.allLanguage);
  const productCard = useSelector((state) => state.productCard);
  return (
    <>
      <BackCard>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" to="/">
              {L.glavne[lan]}
            </Link>
            {productCard && (
              <Link underline="hover" to={productCard?.type}>
                {productCard?.type}
              </Link>
            )}
            {productCard && <Typography>{productCard?.title}</Typography>}
          </Breadcrumbs>
        </Stack>
      </BackCard>
    </>
  );
};
export const BackFashion = () => {
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
export const BackJob = () => {
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Typography key="3" color="text.primary">
      {data[3]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Typography key="3" color="text.primary">
      {L.moyprfel[lan]}
    </Typography>,
  ];
  return (
    <>
      <BackCard >
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Typography key="3" color="text.primary">
      {L.nastroyke[lan]}
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
export const BackAdmin = () => {
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Typography key="3" color="text.primary">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
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
export const BackAdminFile = () => {
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
    </Link>,
    <Link underline="hover" to="/admen">
      {L.ketogor[lan]}
    </Link>,
    <Typography key="3" color="text.primary">
      file
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
  const lan = useSelector((state) => state.allLanguage);
  const breadcrumbs = [
    <Link underline="hover" to="/">
      {L.glavne[lan]}
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
  @media(max-width:700px){
    display: none;
    
  }
`;

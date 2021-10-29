import React from "react";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import styled from "styled-components";
import NoImages from "../assets/NoImages.jpg";
import {
  Wrapper,
  StyledInfo,
  MenuSection,
} from "./MaterialComponent/images";
import { Typography } from "@mui/material";
import CarouselApp from "./productSlides/Slides";

const Image = ({ dataProduct }) => {
  return (
    <Wrapper>
      {dataProduct.images.length >= 1 ? (
        <CarouselApp dataImg={dataProduct} />
      ) : (
        <img
          height="400px"
          width="100%"
          objectFit="cover"
          src={NoImages}
          alt="No images"
        />
      )}

      <MenuSection>
        <Typography variant="h4">{dataProduct.title}</Typography>
        <StyledTypo>{dataProduct.price}</StyledTypo>
      </MenuSection>
      <StyledInfo>
        <div>
          <img src={clock} /> <p>{dataProduct.view_count}</p>
        </div>
        <div>
          <img src={location} />
          <p> {dataProduct.feature_expired_at} </p>
        </div>
      </StyledInfo>
    </Wrapper>
  );
};

export default Image;

export const StyledTypo = styled.div`
  font-weight: 800;
  font-size: 50px;
  line-height: 23px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 15px 0px;
`;

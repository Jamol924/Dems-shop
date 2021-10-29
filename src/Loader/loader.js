import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components"
function LoaderSpinner() {
  return (
    <LoaderContainer>
      <Loader
        type="Bars"
        color="#f32e48"
        height={100}
        width={100}
        timeout={6000} //3 secs
      />
    </LoaderContainer>
  );
}

export default LoaderSpinner;


const LoaderContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

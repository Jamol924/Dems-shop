import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
function LoaderSpinner() {
  return (
    <LoaderContainer>
      <Loader
        type="ThreeDots"
        color="#2a3a96"
        height={100}
        width={100}
        timeout={90000} //3 secs
      />
    </LoaderContainer>
  );
}

export default LoaderSpinner;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1>Features:</h1>
        <div className="line" />
      </div>
      <div className="items">
        <PStyled>
          <p>Lorem ipsum dummy text</p>
          <p>Lorem ipsum dummy text</p>
          <p>Lorem ipsum dummy text</p>
        </PStyled>
        <HStyled>
          <p>Lorem ipsum dummy text</p>
          <p>Lorem ipsum dummy text</p>
          <p>Lorem ipsum dummy text</p>
        </HStyled>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
  padding-left: 26px;
  background: white;
  padding-top: 29px;
  display: flex;
  flex-direction: column;
  div.title {
    display: flex;
    flex-direction: column;
  }
  div.items {
    display: flex;
  }
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: #6c6c6c;
    font-family: "Inter", sans-serif;
  }

  div.line {
    width: 40px;
    height: 5px;
    background: #f85c70;
    margin: 20px 0;
  }
`;

const PStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const HStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-left: 185px;
`;

export default Features;

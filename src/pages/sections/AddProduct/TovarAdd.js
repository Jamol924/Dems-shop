import React from "react";
import styled from "styled-components";
import { InputLabel, TextareaAutosize } from "@mui/material";

function TovarAdd() {
  return (
    <div>
      <Wrapper>
        <InputLabel sx={{ mt: 1 }} htmlFor="input-with-icon-adornment">
          Tavsif*
        </InputLabel>
        <StyledTextareaAutosize
          placeholder="Maximum 4 rows"
        />
        <StyledInputLabel htmlFor="input-with-icon-adornment">
          <span>Yana kamida 16 ta belgi yozing</span>
          <span>64/9000</span>
        </StyledInputLabel>
      </Wrapper>
    </div>
  );
}

export default TovarAdd;

const Wrapper = styled.div`
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
`;
const StyledTextareaAutosize = styled.textarea`
  width: 70%;
  height: 270px;
  background: #dedede;
  border-radius:4px;
  border:none;
  outline:none;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border-bottom: 2px solid #f85c70;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  @media (max-width: 800px) {
    width: 90%;
  }
  &::placeholder{
      font-size: 18px;
  }
`;
const StyledInputLabel = styled.div`
  width: 74%;
  @media (max-width: 800px) {
    width: 98%;
  }
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  &>span{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

import {
  Button,
  FormControl,
  MenuItem,
  TextField,
  ToggleButton,
} from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  max-width: 100%;
  @media (max-width: 550px) {
    margin-bottom: 100px;
    overflow: hidden;
  }
`;
export const Container = styled.div`
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 120px;
  @media (max-width: 1024px) {
    padding: 20px 70px;
  }
  @media (max-width: 768px) {
    padding: 20px 50px;
  }
  @media (max-width: 550px) {
    padding: 10px 10px;
  }
`;
export const StyledToggleButton = styled(ToggleButton)`
  &&.MuiToggleButton-sizeMedium {
    border-radius: 50%;
  }
  &&.css-1c8m7p7-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover {
    background-color: blue;
    border-radius: 50%;
  }
  &&.css-1c8m7p7-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:focus {
    border-radius: 50%;
    background-color: blue;
  }
  &&.css-1c8m7p7-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:active {
    border-radius: 50%;
    background-color: blue;
  }
  &&.MuiButtonBase-root:nth-child(1) {
    background-color: white;
    border-radius: 30%;
    transition: all 0.3s;
    margin-right: 5px;
    box-shadow: 1px 1px 20px #ccc;
  }
  &&.MuiButtonBase-root:nth-child(2) {
    background-color: red;
    border-radius: 30%;
    transition: all 0.3s;
    margin-right: 5px;
    box-shadow: 1px 1px 20px #ccc;
  }
  &&.MuiButtonBase-root:nth-child(3) {
    background-color: black;
    border-radius: 30%;
    transition: all 0.3s;
    margin-right: 5px;
    box-shadow: 1px 1px 20px #ccc;
  }
  &&.MuiButtonBase-root:nth-child(4) {
    background-color: gray;
    border-radius: 30%;
    transition: all 0.3s;
    margin-right: 5px;
    box-shadow: 1px 1px 20px #ccc;
  }
`;

export const MenuContent = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background: #f5f7f7;

  @media (max-width: 550px) {
    padding: 10px;
    border: 0px solid #ccc;
    margin-bottom: 10px;
    background: #f5f7f7;
  }
`;
export const MenuTitle = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
export const StyledButton = styled(Button)`
  && {
    background: #3545a3;
    color: white;
    padding: 13px 18px;
    border-radius: 25px;

    &:hover {
      background: #2a3a96;
    }
  }
  @media (max-width: 550px) {
    && {
      padding: 10px 18px;
      border-radius: 20px;
    }
  }
`;
export const StyledLink = styled.span`
  font-size: 13px;
  margin-bottom: 50px;
`;
export const StyledFormControl = styled(FormControl)`
  .MuiFilledInput-input {
    background: white;
  }
  .MuiFilledInput-input {
    background: white;
  }
  .MuiFilledInput-underline:before {
    border-bottom: 2px solid white;
  }
  .MuiFilledInput-underline:after {
    border-bottom: 2px solid #ccc;
  }
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
  }
  && {
    .MuiInputBase-root.Mui-focused fieldset {
      border: 1px solid rgb(153, 149, 149);
    }
  }
  width: 45%;
  margin: 0px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 20px;
  }
`;

export const StyledTextField = styled(TextField)`
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
    border-radius: 20px;
  }
  .MuiFilledInput-underline:before {
    border-bottom: 2px solid white;
  }
  .MuiFilledInput-underline:after {
    border-bottom: 2px solid #4f4747;
  }
  .MuiFilledInput-input {
    background: white;
  }
  && {
    .MuiInputBase-root.Mui-focused fieldset {
      border: 1px solid rgb(153, 149, 149);
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-top: 5px;
  }
`;
export const StyledTextFieldAdd = styled(TextField)`
  width: 48%;
  .MuiInputLabel-root.Mui-focused {
    color: rgb(153, 149, 149);
    border-radius: 20px;
  }
  .MuiFilledInput-underline:before {
    border-bottom: 2px solid white;
  }
  .MuiFilledInput-underline:after {
    border-bottom: 2px solid #4f4747;
  }
  .MuiFilledInput-input {
    background: white;
  }
  && {
    .MuiInputBase-root.Mui-focused fieldset {
      border: 1px solid rgb(153, 149, 149);
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-top: 5px;
  }
`;
export const Range = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`;

export const StyledColumn = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 7px #ccc;
    overflow: hidden;
    border-radius: 7px;
    width: 100px;
    height: 100px;
  }
`;
export const StyledCars = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 7px #ccc;
  overflow: hidden;
  border-radius: 7px;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  &&.MuiMenuItem-root {
    display: block;
    padding: 12px;
  }
`;

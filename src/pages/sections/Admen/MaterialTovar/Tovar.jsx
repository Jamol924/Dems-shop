import { Button, FormControl, TextField } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const Container = styled.div`
  height: auto;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin-top: 120px; */
  padding: 20px 150px;
  @media (max-width: 765px) {
    padding: 20px 50px;
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
`;
export const StyledButton = styled(Button)`
  && {
    background: #f85c70;

    &:hover {
      background: #f32e48;
    }
  }
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
`;
export const StyledCars = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow:1px 1px 7px #ccc;
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
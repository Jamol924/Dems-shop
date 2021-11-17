import styled from "styled-components";

export const Wrapper = styled.div`
padding: 0px 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
  }
  span {
    color: #7e7e7e;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    font-size: 13px;
    line-height: 15px;
    font-weight: 800px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
  }
  ul {
    list-style: none;
  }
  li {
    border-bottom: 1px solid #dfdfdf;
  }
  a {
    text-decoration: none;
    font-size: 13px;
    line-height: 15px;
    font-weight: normal;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    color: #5c5c5c;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  div.line {
    width: 40px;
    height: 5px;
    background: #2a2480;
    margin: 20px 0;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  font-family: "Inter", sans-serif;
  color: #6c6c6c;
`;

export const StyledInfo = styled.div`
  border-bottom: 1px solid #dfdfdf;
  span{
    font-size: 15px;
  }
`;

export const List = styled.div`
  border-bottom:1px solid #ccc;
  margin: 0px 30px;
  margin-top: 40px;
  div {
    padding:4px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;
export const TextArea = styled.div`
width: 60%;
  height: auto;
`;

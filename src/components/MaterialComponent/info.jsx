import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  background: white;
  padding-top: 50px;
  display: flex;
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
    background: #f85c70;
    margin: 20px 0;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  font-family: "Inter", sans-serif;
  color: #6c6c6c;
  width: 100%;
  height: 100%;
`;

export const StyledInfo = styled.div`
  border-bottom: 1px solid #dfdfdf;
`;

export const List = styled.div`
  width: 80px;
  margin-top: 40px;
  border-bottom:1px solid #ccc;
  div {
    padding:4px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;
export const TextArea = styled.div`
  width: 50%;
  height: auto;
`;

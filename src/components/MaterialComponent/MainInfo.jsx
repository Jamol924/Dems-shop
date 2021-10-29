import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  @media(max-width:1080px){
    flex-direction: column;
  }
`;
export const Left = styled.div`
  width:70%;
  height:auto;
  background: white;
  @media(max-width:1080px){
    width:100%;
  }
`;
export const Right = styled.div`
  background: white;
  width:27%;
  height: fit-content;
  @media(max-width:1080px){
    width: 100%;
    margin-top: 20px;
  }
`;
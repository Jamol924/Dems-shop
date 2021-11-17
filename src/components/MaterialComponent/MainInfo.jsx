import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  width: 680px;
  height: auto;
  background: white;
  border-radius: 5px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Right = styled.div`
  width: 290px;
  background: white;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    width: 100%;
   
  }
`;

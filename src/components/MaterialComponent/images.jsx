import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 25px;
  display: flex;
  flex-direction:column;
`;
export const TopImages = styled.div`
  width: 100%;
  height:auto;
  img{
    width: 100%;
    height: 430px;
    object-fit: cover;
  }
 
`;
export const BottomImages = styled.div`
  background: white;
 
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    color: #949494;
    font-family: "Roboto", sans-serif;
    margin-right: 30px;

    p {
      margin-left: 10px;
    }
  }
`;
export const MenuSection =styled.div`
  width:100%;
  height:auto;
  margin-top: 10px;
`

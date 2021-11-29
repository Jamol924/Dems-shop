import styled from "styled-components";

export const Wrapper = styled.div`
padding: 30px 30px 0px;
  background: white;
  display: flex;
  flex-direction:column;
  @media(max-width:700px){
    padding: 25px 15px 0px;
  }
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
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
export const MenuSection =styled.div`
  width:100%;
  height:auto;
`

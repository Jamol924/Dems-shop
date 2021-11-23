import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-left: 20px;
  width: 235px;
  height: 345px;
  cursor: pointer;
  border: 1px solid gray;
  margin-bottom: 25px;
  background: #ffffff;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  ul {
    list-style: none;
  }
  @media (max-width: 550px) {
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 170px;
    height: 250px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  @media (max-width: 350px) {
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 140px;
    height: 230px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
`;
export const RowColumn = styled.div`
  margin-left: 20px;
  width: 235px;
  height: 346px;
  cursor: pointer;
  border: 1px solid gray;
  margin-bottom: 25px;
  background: #ffffff;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  ul {
    list-style: none;
  }
  @media (max-width: 550px) {
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    width: 170px;
    height: 250px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const ImgDi = styled.div`
  background: white;
  overflow: hidden;
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  position: relative;

  & > img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;
export const CardMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 18px 27px 18px;
  @media (max-width: 550px) {
    padding: 10px 9px 10px 9px;
  }
`;
export const CardTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2a2a2a;
  margin-bottom: 16px;
  width: 100%;
  display: block;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 350px) {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    margin-bottom: 5px;
  }
`;
export const CardW = styled.div`
  display: flex;
  margin-bottom: 9px;
`;

export const WIcon = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 10px;
`;

export const WTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
  width: 90%;
  display: block;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 350px) {
    font-size: 10px;
  line-height: 10px;
  }
`;

export const CardName = styled.div`
  display: flex;
  margin-bottom: 9px;
`;
export const NameIcon = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 10px;
`;
export const NameTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
  width: 90%;
  display: block;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 350px) {
    font-size: 10px;
  line-height: 10px;
  }
`;
export const CardLocation = styled.div`
  display: flex;
  margin-bottom: 9px;
`;
export const LocationIcon = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 10px;
`;
export const LocationTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
  width: 90%;
  display: block;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 350px) {
    font-size: 10px;
  line-height: 10px;
  }
`;
export const CardPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #3545a3;
`;

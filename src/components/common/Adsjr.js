import React from "react";
import img from "../../assets/phone.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Adsjr = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <Link to="/item">
          <Wrapper>
            <ImgDi>
              <SvgDesign
                width="76"
                height="75"
                viewBox="0 0 76 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 75V0H76L0.5 75Z" fill="#F85C70" />
                <path
                  d="M12.6667 23.7417V15.7583C12.6667 14.65 13.3084 14.3833 14.0917 15.1667L16.25 17.325C16.575 17.65 17.1084 17.65 17.425 17.325L20.4084 14.3333C20.7334 14.0083 21.2667 14.0083 21.5834 14.3333L24.575 17.325C24.9 17.65 25.4334 17.65 25.75 17.325L27.9084 15.1667C28.6917 14.3833 29.3334 14.65 29.3334 15.7583V23.75C29.3334 26.25 27.6667 27.9167 25.1667 27.9167H16.8334C14.5334 27.9083 12.6667 26.0417 12.6667 23.7417Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </SvgDesign>

              <img src={data.img} alt="phone" />
            </ImgDi>
            <DivDesign>
              <Styledh>{data.product}</Styledh>
              <ul>
                <li>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16665 5.00004C9.16665 7.30004 7.29998 9.16671 4.99998 9.16671C2.69998 9.16671 0.833313 7.30004 0.833313 5.00004C0.833313 2.70004 2.69998 0.833374 4.99998 0.833374C7.29998 0.833374 9.16665 2.70004 9.16665 5.00004Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.54583 6.32498L5.25416 5.55415C5.02916 5.42082 4.84583 5.09998 4.84583 4.83748V3.12915"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{data.data}</span>
                </li>
                <li>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.00002 5.00004C6.15061 5.00004 7.08335 4.0673 7.08335 2.91671C7.08335 1.76611 6.15061 0.833374 5.00002 0.833374C3.84943 0.833374 2.91669 1.76611 2.91669 2.91671C2.91669 4.0673 3.84943 5.00004 5.00002 5.00004Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.57917 9.16667C8.57917 7.55417 6.975 6.25 5 6.25C3.025 6.25 1.42084 7.55417 1.42084 9.16667"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{data.name}</span>
                </li>
                <li>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99995 5.59585C5.71792 5.59585 6.29995 5.01382 6.29995 4.29585C6.29995 3.57788 5.71792 2.99585 4.99995 2.99585C4.28198 2.99585 3.69995 3.57788 3.69995 4.29585C3.69995 5.01382 4.28198 5.59585 4.99995 5.59585Z"
                      stroke="#999999"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.50837 3.53754C2.32921 -0.0707917 7.67504 -0.0666249 8.49171 3.54171C8.97088 5.65837 7.65421 7.45004 6.50004 8.55838C5.66254 9.36671 4.33754 9.36671 3.49588 8.55838C2.34588 7.45004 1.02921 5.65421 1.50837 3.53754Z"
                      stroke="#999999"
                      stroke-width="1.5"
                    />
                  </svg>
                  <span>{data.location}</span>
                </li>
              </ul>
            </DivDesign>
            <StyledPrice>
              <p>{data.price}</p>
            </StyledPrice>
          </Wrapper>
        </Link>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  max-width: 235px;
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
`;

const ImgDi = styled.div`
  position: relative;
  background: white;
  overflow: hidden;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const SvgDesign = styled.svg`
  position: absolute;
  img {
    width: 100%;
  }
`;

const Styledh = styled.h1`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #2a2a2a;
  padding-top: 21px;
  padding-bottom: 10px;
  text-decoration: none;
`;

const DivDesign = styled.div`
  svg {
    display: inline-block;
    margin-left: 10px;
  }

  span {
    display: inline-block;
    color: #999999;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    font-family: "Roboto", sans-serif;
    margin-left: 10px;
    padding: 5px;
    padding-top: 9px;
  }
`;

const StyledPrice = styled.div`
  color: #f85c70;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  font-family: "Roboto", sans-serif;
  padding-top: 0px;
  margin-left: 18px;
  padding-bottom: 10px;
`;

const StyledHov = styled.div`
  overflow: hidden;
`;

export default Adsjr;

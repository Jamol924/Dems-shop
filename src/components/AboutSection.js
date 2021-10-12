import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import datas from "../pages/sections/Admen/Categore/dataCategore";

const AboutSection = () => {
  const [input, setInput] = React.useState(null);
  const [regions, setRegions] = useState([]);

  const regionFetch = async () => {
    axios
      .post("http://dems.inone.uz/api/region/get-pagin", {
        limit: 20,
        page: 1,
        search: " ",
      })
      .then((res) => {
        setRegions(res.data.data.data);
      })
      .catch((er) => console.log(er));
  };
  

  useEffect(() =>{
    regionFetch();
  },[])

  return (
    
    <Wrapper>
      <WrapperMenu>
        <WrapperTitle>
          <TitleH1>Buy, Sell, Rent & Exchange in one Click</TitleH1>
          <TitleP>
            Search from over 2000+ Active Ads in 29+ Categories for Free
          </TitleP>
        </WrapperTitle>
        <WrapperForm>
          <FormInput>
            <FormLocation>
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 8.39374C8.57694 8.39374 9.44999 7.5207 9.44999 6.44374C9.44999 5.36679 8.57694 4.49374 7.49999 4.49374C6.42303 4.49374 5.54999 5.36679 5.54999 6.44374C5.54999 7.5207 6.42303 8.39374 7.49999 8.39374Z"
                    stroke="#999999"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2.2625 5.30625C3.49375 -0.106249 11.5125 -0.0999984 12.7375 5.3125C13.4563 8.4875 11.4813 11.175 9.75 12.8375C8.49375 14.05 6.50625 14.05 5.24375 12.8375C3.51875 11.175 1.54375 8.48125 2.2625 5.30625Z"
                    stroke="#999999"
                    stroke-width="1.5"
                  />
                </svg>
              </span>

              <input
                onFocus={() => setInput(1)}
                onBlur={() => setInput(null)}
                placeholder="Select Location"
                type="text"
              />
            </FormLocation>
            <FormCategory>
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.60618 9.56253L5.43743 12.3938C6.59993 13.5563 8.48743 13.5563 9.65618 12.3938L12.3999 9.65003C13.5624 8.48753 13.5624 6.60003 12.3999 5.43128L9.56243 2.60628C8.96868 2.01253 8.14993 1.69378 7.31243 1.73753L4.18743 1.88753C2.93743 1.94378 1.94368 2.93753 1.88118 4.18128L1.73118 7.30628C1.69368 8.15003 2.01243 8.96878 2.60618 9.56253Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.93744 7.50003C6.80038 7.50003 7.49994 6.80048 7.49994 5.93753C7.49994 5.07459 6.80038 4.37503 5.93744 4.37503C5.07449 4.37503 4.37494 5.07459 4.37494 5.93753C4.37494 6.80048 5.07449 7.50003 5.93744 7.50003Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>

              <input
                onFocus={() => setInput(2)}
                onBlur={() => setInput(null)}
                placeholder="Select Category"
                type="text"
              />
            </FormCategory>
            <FormText>
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 13.75H9.375C12.5 13.75 13.75 12.5 13.75 9.375V5.625C13.75 2.5 12.5 1.25 9.375 1.25H5.625C2.5 1.25 1.25 2.5 1.25 5.625V9.375C1.25 12.5 2.5 13.75 5.625 13.75Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.375 5.55625C6.34375 4.575 8.65625 4.575 10.625 5.55625"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 10.1875V4.95624"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input placeholder="Enter keyword here..." type="text" />
            </FormText>
            <FormButton>
              <span>
                <SearchIcon>
                  <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <SearchInput>Search</SearchInput>
              </span>
            </FormButton>
          </FormInput>
          <FormInputActive>
            {input === 1 && (
              <LocationStyles>
              {regions.map((regon) =>(
                <p>{regon.name}</p>
              ))}
                </LocationStyles>
            )}
            {input === 2 && (
              <LocationSty>
                {datas.map((dat) =>(
                  <p>{dat.title}</p>
                ))}
              </LocationSty>
            )}
          </FormInputActive>
        </WrapperForm>
      </WrapperMenu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
`;
const WrapperMenu = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;
const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleH1 = styled.h1`
  margin-top: -20px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #ffffff;
`;
const TitleP = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #e5e5e5;
`;
//  Form .. ....... //

const WrapperForm = styled.div`
  position: relative;
`;
const FormInput = styled.div`
  height: 54px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 1px;
`;
const FormLocation = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 200px;
    height: 100%;
  }
  @media (max-width: 950px) {
    height: 100%;
    width: 48%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
`;
const FormCategory = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 200px;
    height: 100%;
  }
  @media (max-width: 950px) {
    width: 48%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    border-top: 1px solid grey;
    width: 100%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
`;
const FormText = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 200px;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    border-top: 1px solid grey;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
`;
const FormButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 100%;
    background: #f85c70;
    color: #ffffff;
    padding: 0px;
    font-size: 17px;
  }
  @media (max-width: 950px) {
    width: 100%;
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: #f85c70;
      padding: 0px;
      color: white;
      font-size: 17px;
    }
  }
`;
const SearchIcon = styled.span`
  width: 12px;
  height: 12px;
  color: white;
  margin-right: 7px;
  margin-bottom: 5px;
`;
const SearchInput = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  margin-left: 7px;
`;
const FormInputActive = styled.div`
  font-size: 14px;
`;
const LocationStyles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-top: 1px solid grey;
  & > p {
    flex: 1 0 30%;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: grey;
    &:hover {
      color: white;
      background: #f85c70;
    }
  }
`;
const LocationSty = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-top: 1px solid grey;
  color: grey;
  & > p {
    flex: 1 0 45%;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    &:hover {
      color: white;
      background: #f85c70;
    }
  }
`;

export default AboutSection;

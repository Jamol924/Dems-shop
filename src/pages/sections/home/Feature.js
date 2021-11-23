import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setProdFeat } from "../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import PaginationLink from "../../../components/pagenaton/Paginat.js";
import L from "../../../locale/language.json";
import axios from "axios";
import FatureTovar from "../../../components/common/FeatureTovar";

const Feature = () => {
  const lan = useSelector((state) => state.allLanguage);
  const dispatch1 = useDispatch();

  const filters = useSelector((state) => state.Search.data);

  const [pag, setPag] = useState(1);
  const [numberOf, setNumberOf] = useState();
  const productFetch = async () => {
    const instance = axios.create({
      baseURL: "http://dems.inone.uz/api/",
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    await instance
      .post("ad/featured/get-pagin", {
        limit: 10,
        page: pag,
      })
      .then((res) => {
        console.log(res);
        dispatch1(setProdFeat(res.data.data.data));
        setNumberOf(res.data.data.total);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    productFetch();
  }, [pag]);

  return (
    <div style={{ maxWidth: "100%" }}>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.cardfeature[lan]}</h1>
          </div>
          <Row>
            <FatureTovar />
          </Row>
          <PaginationLink setPag={setPag} pagNumber={numberOf} />
        </div>
      </Wrapper>
    </div>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 5px;
    font-family: "Quicksand", sans-serif;
    margin-top: 69px;
    margin-bottom: 43px;
  }
  @media (max-width: 550px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      max-width: 100%;
    }
  }
  @media (max-width: 350px) {
    h1 {
      font-size: 20px;
      line-height: 12px;
      text-align: center;
      padding-bottom: 4px;
      font-family: "Quicksand", sans-serif;
      margin-top: 50px;
      margin-bottom: 30px;
    }
  }
`;

export const Row = styled.div`
  width: 1020px;
  height: auto;
  display: flex;
  margin-right: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1066px) {
    width: 770px;
  }
  @media (max-width: 800px) {
    width: 530px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 550px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Blocc = styled.div`
  @media (max-width: 550px) {
    margin-bottom: 100px;
  }
`;

export default Feature;

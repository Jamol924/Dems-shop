import React, { useState, useEffect } from "react";
import Adsjr from "../../../../components/common/Adsjr";
import { setProducts } from "../../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaginationLink from "../../../../components/pagenaton/Paginat";
import { Wrapper, Row } from "../../home/Ads";
import L from "../../../../locale/language.json";
import images from "../../../../assets/removeQuti.png"

const CardAuto = ({ filters }) => {
  const lan = useSelector((state) => state.allLanguage);
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);

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
      .post("ad/get-pagin", {
        limit: 10,
        page: pag,
        search: "",
        type: "jobs",
      })
      .then((res) => {
        setNumberOf(res.data.data.total);
        dispatch1(setProducts(res.data.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  const Filter = products1.filter(
    (eliment) =>
      (filters.location.length > 0
        ? eliment.region_id === filters.location
        : true) &&
      (filters.search.length > 0
        ? eliment.title.toLowerCase().includes(filters.search.toLowerCase())
        : true)
  );

  useEffect(() => {
    productFetch();
  }, [pag]);

  return numberOf === 0 ? (
    <>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.category.job[lan]}</h1>
          </div>
          <div>
            <img src={images} />
          </div>
        </div>
      </Wrapper>
    </>
  ) : (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.category.job[lan]}</h1>
          </div>
          <Row>
            <Adsjr datas={Filter.length >= 0 ? Filter : products1} />
          </Row>
          <PaginationLink setPag={setPag} pagNumber={numberOf} />
        </div>
      </Wrapper>
    </div>
  );
};

export default CardAuto;

import React, {useState, useEffect } from "react";
import Adsjr from "../../../../components/common/Adsjr";
import { setProducts } from "../../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaginationLink from "../../../../components/pagenaton/Paginat";
import {Wrapper, Row } from "../../home/Ads";

const CardElictron = ({filters}) => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);

  const [pag, setPag] = useState(1); 
  const [numberOf, setNumberOf] = useState(); 
  console.log(numberOf)
  const productFetch = async () => {
    const respons = await axios
      .post("http://dems.inone.uz/api/ad/get-pagin", {
        limit: 10,
        page: pag,
        search:"",
        type: "electronics",
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

  return (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>Электроника</h1>
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


export default CardElictron;

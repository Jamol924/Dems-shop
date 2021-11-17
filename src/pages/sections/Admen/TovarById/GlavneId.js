import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cars from "./Cars";
import Home from "./Home";
import Electronics from "./Electronics";
import Jobs from "./Jobs";
import FashionStyle from "./FashionStyle";
import ChildrensWorld from "./ChildrensWorld";
import BusinesS from "./businesService";
import Agriculture from "./Agriculture";
import {useDispatch, useSelector} from "react-redux"
import {eliment} from "../../../../redux/active/productActions"

function GlavneId() {
  const allSetElim = useSelector(state => state.allSetElim)
  const dispatch = useDispatch();
  const [count, setCount] = useState([]);
  const colItem = count.data?.data;
  const { productId } = useParams();
  const fetchProductDetail = async () => {
    return await axios
      .post(`http://dems.inone.uz/api/ad/get-by-id`, {
        _id: `${productId}`,
        limit: 10,
        page: 1,
      })
      .then((res) => {
        setCount(res);
        dispatch(eliment(res))
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    if (productId && productId !== " ") fetchProductDetail();
  }, [productId]);

  const item = 1;
  {
    switch (colItem?.type) {
      case "cars":
        return (
          <>
            <Cars dataCard={colItem} />
          </>
        )
        break;
      case "home":
        return(
            <><Home dataCard={colItem} /></>
        )
        break;
      case "electronics":
        return(
            <><Electronics dataCard={colItem} /></>
        )
        break;
      case "jobs":
        return(
            <><Jobs dataCard={colItem} /></>
        )
        break;
      case "fashion-style":
        return(
            <><FashionStyle dataCard={colItem} /></>
        )
        break;
      case "childrens-world":
        return(
            <><ChildrensWorld dataCard={colItem} /></>
        )
        break;
      case "business-service":
        return(
            <><BusinesS dataCard={colItem} /></>
        )
        break;
      case "agriculture":
        return(
            <><Agriculture dataCard={colItem} /></>
        )
        break;
    }
  }

  return (
    <>
      {item === 2 && <Cars dataCard={colItem} />}
      {item === 3 && <Home dataCard={colItem} />}
      {item === 4 && <Electronics dataCard={colItem} />}
      {item === 5 && <Jobs dataCard={colItem} />}
      {item === 6 && <FashionStyle dataCard={colItem} />}
      {item === 7 && <ChildrensWorld dataCard={colItem} />}
      {item === 8 && <businesService dataCard={colItem} />}
      {item === 9 && <Agriculture dataCard={colItem} />}
    </>
  );
}

export default GlavneId;

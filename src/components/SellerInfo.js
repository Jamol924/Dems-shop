import React, { useState } from "react";
import locat from "../assets/locat.svg";
import shop from "../assets/shop-add.svg";
import { Wrapper} from "./MaterialComponent/SellerInfo";
import { Typography } from "@mui/material";
import { StyledButton } from "../pages/sections/Admen/MaterialTovar/Tovar.jsx";
import { useSelector } from "react-redux";
import L from "../locale/language.json"

const SellerInfo = ({ dataSeller }) => {
  const lan = useSelector(state => state.allLanguage)  
  const [count, setCount] = useState(L.item.qungiroq[lan]);
  const handleCount = () => {
    setCount(dataSeller.phone_number);
  };

  return (
    <>
      <Wrapper>
        <Typography variant="h6">{L.item.sel[lan]}</Typography>
        <div>
          <h3>{dataSeller.name}</h3>
        </div>
        <div>
          <img src={locat} />
          <p>{dataSeller.city_name}</p>
        </div>
        <div>
          <img src={shop} />
          <p>{dataSeller.state} </p>
        </div>
        <StyledButton onClick={handleCount} variant="contained">
          {count}
        </StyledButton>
      </Wrapper>
    </>
  );
};

export default SellerInfo;

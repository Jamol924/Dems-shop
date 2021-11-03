import React, { useState } from "react";
import locat from "../assets/locat.svg";
import shop from "../assets/shop-add.svg";
import rectangle from "../assets/Rectangle 23.svg";
import { Wrapper } from "./MaterialComponent/SellerInfo";
import { Typography } from "@mui/material";
import { StyledButton } from "../pages/sections/Admen/MaterialTovar/Tovar.jsx";
import axios from "axios"

const SellerInfo = ({ dataSeller }) => {
  const [count, setCount] = useState("Qo'ng'iroq qiling");
  const handleCount = () => {
    setCount(dataSeller.phone_number);
  };

  axios
    .post(`http://dems.inone.uz/api/update-profile`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <>
      <Wrapper>
        <Typography variant="h6">Seller Information</Typography>
        <div>
          <img src={rectangle} />
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

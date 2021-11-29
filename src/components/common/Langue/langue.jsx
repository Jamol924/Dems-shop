import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../redux/active/productActions";
import L from "../../../locale/language.json";
import "../Langue/styled.css"

export default function Langue() {
  const lan = useSelector((state) => state.allLanguage);
  const dispatch = useDispatch();

  const [age, setAge] = useState(localStorage.getItem("language") || "uz");


  
  return (
    <div className="content" >
      <select
      className="Select"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
          dispatch(language(e.target.value));
        }}
      >
        <option className="opt" value="uz">{L.til.uzbek[lan]}</option>
        <option className="opt" value="ru">{L.til.rus[lan]}</option>
        <option className="opt" value="en">{L.til.eng[lan]}</option>
      </select>
    </div>
  );
}



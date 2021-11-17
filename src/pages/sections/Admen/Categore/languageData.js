import React from "react";
import { useEffect } from "react";
import l from "../../../../locale/language.json";
import { useSelector } from "react-redux";

export const LanCars = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.cars[lan]}</>;
};
export const LanHome = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.home[lan]}</>;
};
export const LanEl = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.el[lan]}</>;
};
export const LanJob = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.job[lan]}</>;
};
export const LanFa = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.fa[lan]}</>;
};
export const LanChil = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.chil[lan]}</>;
};
export const LanBus = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.bus[lan]}</>;
};
export const LanAgr = () => {
  const lan = useSelector((state) => state.allLanguage);
  return <>{l.category.agr[lan]}</>;
};

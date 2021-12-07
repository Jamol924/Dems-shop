import { combineReducers } from "redux";
import {
  productReducer,
  selectdProductReducer,
  CategoreReducer,
  productSearch,
  setImages,
  setCounter,
  setLanguage,
  setCars,
  setElim,
  productFeature,
  setScrol,
} from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  CategoreCard: CategoreReducer,
  productCard: selectdProductReducer,
  Search:productSearch,
  allImage:setImages,
  allCounter:setCounter,
  allLanguage:setLanguage,
  allSetCars:setCars,
  allSetElim: setElim,
  allProduc:productFeature,
  allScrol:setScrol,
});

export default reducer;

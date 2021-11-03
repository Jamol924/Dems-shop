import { combineReducers } from "redux";
import {
  productReducer,
  selectdProductReducer,
  CategoreReducer,
  productSearch,
  setImages,
  setCounter,
} from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  CategoreCard: CategoreReducer,
  productCard: selectdProductReducer,
  Search:productSearch,
  allImage:setImages,
  allCounter:setCounter,
});

export default reducer;

import { combineReducers } from "redux";
import {
  productReducer,
  selectdProductReducer,
  CategoreReducer,
  productSearch,
  useImages,
} from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  CategoreCard: CategoreReducer,
  productCard: selectdProductReducer,
  Search:productSearch,
  allImage:useImages,
});

export default reducer;

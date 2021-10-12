import { combineReducers } from "redux";
import { productReducer, selectdProductReducer,CategoreReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  CategoreCard: CategoreReducer,
  productCard: selectdProductReducer,
});


export default reducer;

import { combineReducers } from "redux";
import { productReducer, selectdProductReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  productCard: selectdProductReducer,
});


export default reducer;

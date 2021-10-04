import { ActionType } from "../contants/Action-Type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectdProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export const removeSelectdProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return { };
    default:
      return state;
  }
};

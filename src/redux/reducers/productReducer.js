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
  export const productFeature = (state = { qiymat: [], products: [] }, { type, payload }) => {
    switch (type) {
      case ActionType.SET_PRODFEAT:
        return { ...state, products: payload };
      default:
        return state;
    }
  };
  export const productSearch = (state = { data: [] }, { type, payload }) => {
    switch (type) {
      case ActionType.SEARCH_VALUE:
        return { ...state, data: payload };
      default:
        return state;
    }
  };

  export const CategoreReducer = (
    state = { Categore: [] },
    { type, payload }
  ) => {
    switch (type) {
      case ActionType.SELECTED_CATEGORE_PRODUCT:
        return { ...state, Categore: payload };

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
        return {};
      default:
        return state;
    }
  };
  export const setImages = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionType.SET_IMAG:
        return { ...state, ...payload };
      default:
        return state;
    }
  };
  export const setCars = (state = { }, { type, payload }) => {
    switch (type) {
      case ActionType.CARSELIMENT_VALUE:
        return { ...state, ...payload };
      default:
        return state;
    }
  };
  export const setCounter = (
    state = localStorage.getItem("token") ? true : false,
    { type, payload }
  ) => {
    switch (type) {
      case ActionType.COUNT_VALUE:
        return payload;
      default:
        return state;
    }
  };

  export const setLanguage = (
    state = localStorage.getItem("language") || "uz" ,
    { type, payload }
  ) => {
    switch (type) {
      case ActionType.LANGUE_VALUE: {
        localStorage.setItem("language", payload);
        return payload;
      }
      default:
        return state;
    }
  };
  export const setElim = (state = { },  { type, payload }) => {
    switch (type) {
      case ActionType.El_VALUE: {
        return {...state, ...payload};
      }
      default:
        return state;
    }
  };
  export const setScrol = (state = { },  { type, payload }) => {
    switch (type) {
      case ActionType.SET_SCROL: {
        return {...state, ...payload};
      }
      default:
        return state;
    }
  };

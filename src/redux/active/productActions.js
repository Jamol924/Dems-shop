import { ActionType } from "../contants/Action-Type"


export const useImag = (produc) =>{
    return{
        type: ActionType.SET_IMAG,
        payload: produc,
    }
};
export const setProducts = (products) =>{
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
};
export const selectedProduct = (prod) =>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:prod,
    }
};
export const categoreProduct = (products) =>{
    return{
        type:ActionType.SELECTED_CATEGORE_PRODUCT,
        payload:products,
    }
};
export const removeSelectdProduct = () =>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCT,
    };
};
export const useSearch = (data) =>{
    return{
        type:ActionType.SEARCH_VALUE,
        payload:data,
    };
};
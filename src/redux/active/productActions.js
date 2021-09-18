import { ActionType } from "../contants/Action-Type"


export const setProducts = (products) =>{
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProduct = (products) =>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:products,
    }
}
// export const removeSelectedProduct = (products) =>{
//     return{
//         type:ActionType.REMOVE_SELECTED_PRODUCT,
//         payload:products,
//     }
// }
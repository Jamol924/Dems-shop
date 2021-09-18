import { ActionType } from "../contants/Action-Type";

const initialState ={
    products:[ ]
};

export const productReducer = (state = initialState, {type, payload} ) => {
    switch(type){
        case ActionType.SET_PRODUCTS:
            
        return { ...state, products: payload };
        
        default:
        return state;
    }
};
import { ADD_TO_CART , REMOVE_FROM_CART , INCREASE_QUANTITY , DECREASE_QUANTITY } from "./action";


const initialState = {
    cart : []
}

export const cartReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productExist = state.cart.find(item => item.id === action.payload.id);
            if(productExist){
                return {
                    cart : state.cart.map(item => item.id === action.payload.id ? {...item, quantity : item.quantity + 1, totalCost : item.quantity * item.price} : item)
                }
            }
            return {
                cart : [...state.cart, { ...action.payload, quantity : 1, totalCost : action.payload.quantity * action.payload.price }]
            }
            case REMOVE_FROM_CART:
                return {
                    cart : state.cart.filter(item => item.id !== action.payload.id)
                }
            case INCREASE_QUANTITY :
                return {
                    cart : state.cart.map(item => item.id === action.payload.id ? {...item, quantity : item.quantity + 1} : item)
                }
            case DECREASE_QUANTITY :
                return {
                    cart : state.cart.map(item => item.id === action.payload.id && action.payload.quantity >1 ? {...item, quantity : item.quantity - 1} : item)
                }
        default:
            return state;
    }
}
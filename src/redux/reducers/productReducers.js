import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    products:[{
        id:1,
        name:"Manjari Jain",
        category:"Developer"
    }]
}

export const productReducers = (state=initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state.products = payload
        default:
            return initialState;
    }
}
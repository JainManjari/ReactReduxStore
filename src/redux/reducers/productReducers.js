import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  selectProduct:null
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCTS:
        return {...state, selectProduct:payload}
    default:
      return initialState;
  }
};

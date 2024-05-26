import { ActionTypes } from "../constants/actionTypes";

const initialState = {};

export const selectProductReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

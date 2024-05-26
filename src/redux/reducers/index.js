import { combineReducers } from "redux";
import { productReducers } from "./productReducers";
import { selectProductReducers } from "./selectProductReducers";

const reducers = combineReducers({
    allProducts:productReducers,
    selectProduct:selectProductReducers
});

export default reducers;
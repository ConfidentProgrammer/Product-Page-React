import { combineReducers } from "redux";
import counter from "./counterReducer";
import addedToCart from "./NameReducer";
const masterReducer = combineReducers({
    counter, addedToCart
})

export default masterReducer
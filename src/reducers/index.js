import { combineReducers } from "redux";
import translateReducer from "./translate.reducer";

export default combineReducers({
    translate: translateReducer
});

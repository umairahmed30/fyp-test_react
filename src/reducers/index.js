import pageChange from "./changePage";
import stateMaintain from "./form-obj";

import { combineReducers } from "redux";
const rootReducer=combineReducers({
    pageChange,
    stateMaintain,
})

export default rootReducer;
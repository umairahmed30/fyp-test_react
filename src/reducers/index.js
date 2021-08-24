import pageChange from "./changePage";
import stateMaintain from "./form-obj";
import validateButton from "./next-button-validation";

import { combineReducers } from "redux";
const rootReducer=combineReducers({
    pageChange,
    stateMaintain,
    validateButton,
})

export default rootReducer;
import pageChange from "./changePage";
import stateMaintain from "./form-obj";
import validateButton from "./next-button-validation";
import skillsManage from "./skills";

import { combineReducers } from "redux";
const rootReducer=combineReducers({
    pageChange,
    stateMaintain,
    validateButton,
    skillsManage,
})

export default rootReducer;
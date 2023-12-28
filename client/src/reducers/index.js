import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUsers'
import questionsReducer from './Questions'
import usersReducer from "./Users";


export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer
})

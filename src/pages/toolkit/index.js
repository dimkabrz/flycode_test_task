import {combineReducers,configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./ToolkitSlice";

const rootReducer = combineReducers({
    toolkit:toolkitSlice
})

export const store=configureStore({
    reducer:rootReducer
})





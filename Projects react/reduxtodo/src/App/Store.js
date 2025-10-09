import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../Features/Todo/Todoslice'

export const Store = configureStore({
    reducer : todoReducer
})
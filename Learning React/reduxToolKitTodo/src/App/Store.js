import { configureStore } from "@reduxjs/toolkit"; // 1st step for everytime 

import todoReducer from '../Features/Todo/TodoSlice'

export const store = configureStore({
    reducer : todoReducer
}) // 2nd step 
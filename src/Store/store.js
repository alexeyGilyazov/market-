import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./ItemsSlice";
import { filterReducer } from "./filterSlice";

import { cartReducer } from "./cartSlice";


export const store = configureStore({
    reducer: {
        items: itemReducer,
        filter: filterReducer,
        cart: cartReducer,
    },
});
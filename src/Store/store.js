import { configureStore } from '@reduxjs/toolkit'
import { itemReducer } from './ItemsSlice'
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        items: itemReducer,
        filter: filterReducer
    }
});
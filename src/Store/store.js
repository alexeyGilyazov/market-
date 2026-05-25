import { configureStore } from '@reduxjs/toolkit'
import { itemReducer } from './ItemsSlice'

export const store = configureStore({
    reducer: {
        items: itemReducer
    }
});
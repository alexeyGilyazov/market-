// src/Store/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        currentCategory: 'all',
        fullItem: null,
    },
    reducers: {
        setCategory(state, action) {
            state.currentCategory = action.payload;
        },
        resetCategory(state) {
            state.currentCategory = 'all';
        },
        setFullItem(state, action) {
            state.fullItem = action.payload;
        },
        clearFullItem(state) {
            state.fullItem = null;
        }
    }
});

export const { setCategory, resetCategory, setFullItem, clearFullItem } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
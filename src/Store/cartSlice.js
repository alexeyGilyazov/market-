import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const existing = state.find((el) => el.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.push({ ...item, quantity: 1 });
            }
        },
        removeItem(state, action) {
            return state.filter((el) => el.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
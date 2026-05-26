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
        incrementQuantity(state, action) {
            const itemId = action.payload;
            const item = state.find((el) => el.id === itemId);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const itemId = action.payload;
            const item = state.find((el) => el.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item && item.quantity === 1) {
                return state.filter((el) => el.id !== itemId);
            }
        },
    },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
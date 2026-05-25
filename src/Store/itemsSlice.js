import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

export const fetchItems = createAsyncThunk(
    'items/fetchItems', // имя действия
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('сработала функция фетч юзерс и получили данные с сервера ', response);
        return response.data;
    }
);



const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;

                const categories = action.payload.map((item) => item.category);
                state.categories = Array.from(new Set(categories));

            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                console.log(state.error);
            })
    }

});

export const itemReducer = itemsSlice.reducer
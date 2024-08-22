import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

export const searchAnime = createAsyncThunk(
    'search/searchAnime',
    async ({ query, page, letter }) => {
        if (query){
            const response = await axios.get(`${baseURL}/anime?q=${query}&letter=${letter}&order_by=popularity&sort=asc&sfw=true&page=${page}&limit=16`);
            return response.data;
        } else if (letter){
            const response = await axios.get(`${baseURL}/anime?letter=${letter}&order_by=popularity&sort=asc&sfw=true`);
            return response.data;
        }
    }
);



const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        loading: false,
        error: null,
        total: 0,
        lastPage: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchAnime.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchAnime.fulfilled, (state, action) => {
                state.searchResults = action.payload.data;
                state.total = action.payload.pagination.items.total;
                state.lastPage = action.payload.pagination.last_visible_page;
                state.loading = false;
            })
            .addCase(searchAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default searchSlice.reducer;

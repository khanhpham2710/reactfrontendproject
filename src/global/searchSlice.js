import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

export const searchAnime = createAsyncThunk(
    'search/searchAnime',
    async ({ query, page }) => {
        const response = await axios.get(`${baseURL}/anime?q=${query}&order_by=popularity&sort=asc&sfw=true&page=${page}&limit=16`);
        return response.data;
    }
);

export const searchFieldAnime = createAsyncThunk(
    'search/searchFieldAnime',
    async (query) => {
        const response = await axios.get(`${baseURL}/anime?q=${query}&order_by=popularity&sort=asc&sfw=true&page=1`);
        return response.data;
    }
);


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        searchFieldResults: [],
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
                state.total = action.payload.pagination?.items.total;
                state.lastPage = action.payload.pagination?.last_visible_page;
                state.loading = false;
            })
            .addCase(searchAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchFieldAnime.fulfilled, (state, action) => {
                state.searchFieldResults = action.payload.data;
                state.loading = false;
            })
            .addCase(searchFieldAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default searchSlice.reducer;

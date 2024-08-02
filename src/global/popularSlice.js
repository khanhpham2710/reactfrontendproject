import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";


export const fetchPopularAnime = createAsyncThunk(
    'popular/fetchPopularAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=bypopularity&limit=15`);
        return response.data.data;
    });

const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popularAnime: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularAnime.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPopularAnime.fulfilled, (state, action) => {
                state.popularAnime = action.payload;
                state.loading = false;
            })
            .addCase(fetchPopularAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default popularSlice.reducer;

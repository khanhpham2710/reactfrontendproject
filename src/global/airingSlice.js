import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";


export const fetchAiringAnime = createAsyncThunk(
    'airing/fetchAiringAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=airing&limit=15`);
        return response.data.data;
    });

const airingSlice = createSlice({
    name: 'airing',
    initialState: {
        airingAnime: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAiringAnime.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAiringAnime.fulfilled, (state, action) => {
                state.airingAnime = action.payload;
                state.loading = false;
            })
            .addCase(fetchAiringAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default airingSlice.reducer;

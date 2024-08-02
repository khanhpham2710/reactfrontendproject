import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

export const fetchPopularAnime = createAsyncThunk(
    'animeList/fetchPopularAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=bypopularity&limit=20`);
        return response.data.data;
    }
);

export const fetchUpcomingAnime = createAsyncThunk(
    'animeList/fetchUpcomingAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=upcoming&limit=20`);
        return response.data.data;
    }
);

export const fetchAiringAnime = createAsyncThunk(
    'animeList/fetchAiringAnime',
    async () => {
        const response = await axios.get(`${baseURL}/top/anime?filter=airing&limit=20`);
        return response.data.data;
    }
);

const animeListSlice = createSlice({
    name: 'animeList',
    initialState: {
        popularAnime: [],
        airingAnime: [],
        upcomingAnime: [],
        loading: {
            popularAnime: false,
            airingAnime: false,
            upcomingAnime: false,
        },
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularAnime.pending, (state) => {
                state.loading.popularAnime = true;
            })
            .addCase(fetchPopularAnime.fulfilled, (state, action) => {
                state.popularAnime = action.payload;
                state.loading.popularAnime = false;
            })
            .addCase(fetchPopularAnime.rejected, (state, action) => {
                state.loading.popularAnime = false;
                state.error = action.error.message || 'An unknown error occurred';
            })
            .addCase(fetchAiringAnime.pending, (state) => {
                state.loading.airingAnime = true;
            })
            .addCase(fetchAiringAnime.fulfilled, (state, action) => {
                state.airingAnime = action.payload;
                state.loading.airingAnime = false;
            })
            .addCase(fetchAiringAnime.rejected, (state, action) => {
                state.loading.airingAnime = false;
                state.error = action.error.message || 'An unknown error occurred';
            })
            .addCase(fetchUpcomingAnime.pending, (state) => {
                state.loading.upcomingAnime = true;
            })
            .addCase(fetchUpcomingAnime.fulfilled, (state, action) => {
                state.upcomingAnime = action.payload;
                state.loading.upcomingAnime = false;
            })
            .addCase(fetchUpcomingAnime.rejected, (state, action) => {
                state.loading.upcomingAnime = false;
                state.error = action.error.message || 'An unknown error occurred';
            });
    }
});

export default animeListSlice.reducer;

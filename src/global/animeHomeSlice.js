import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

const categories = ['TopRated', 'Popular', 'Airing', 'Upcoming', 'Favorite'];

const createFetchThunk = (category) => createAsyncThunk(
    `animeHome/fetch${category}Anime`,
    async () => {
        const filter = category.toLowerCase() === 'toprated' ? '' : `?filter=${category.toLowerCase()}&`;
        const response = await axios.get(`${baseURL}/top/anime${filter}limit=24&sfw=true`);
        return response.data.data;
    }
);

const initialState = {
    topRatedAnime: [],
    popularAnime: [],
    airingAnime: [],
    upcomingAnime: [],
    favoriteAnime: [],
    loading: {},
    error: null,
};

const animeHomeSlice = createSlice({
    name: 'animeHome',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        categories.forEach((category) => {
            const lowerCategory = category.toLowerCase();
            builder
                .addCase(createFetchThunk(category).pending, (state) => {
                    state.loading[lowerCategory] = true;
                })
                .addCase(createFetchThunk(category).fulfilled, (state, action) => {
                    state[`${lowerCategory}Anime`] = action.payload;
                    state.loading[lowerCategory] = false;
                })
                .addCase(createFetchThunk(category).rejected, (state, action) => {
                    state.loading[lowerCategory] = false;
                    state.error = action.error.message || 'An unknown error occurred';
                });
        });
    }
});

export default animeHomeSlice.reducer;

export const fetchTopRatedAnime = createFetchThunk('TopRated');
export const fetchPopularAnime = createFetchThunk('Popular');
export const fetchAiringAnime = createFetchThunk('Airing');
export const fetchUpcomingAnime = createFetchThunk('Upcoming');
export const fetchFavoriteAnime = createFetchThunk('Favorite');

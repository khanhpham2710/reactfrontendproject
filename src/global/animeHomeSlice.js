import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

const categories = ['toprated', 'bypopularity', 'airing', 'upcoming', 'favorite'];


const createFetchThunk = (category) => {
    return createAsyncThunk(
        `animeHome/fetch${category}Anime`,
        async () => {
            const filter = category === 'toprated' ? '' : `filter=${category}&`;
            const response = await axios.get(`${baseURL}/top/anime?${filter}limit=24&sfw=true`);
            return response.data.data;
        }
    );
};


export const fetchTopRatedAnime = createFetchThunk('toprated');
export const fetchPopularAnime = createFetchThunk('bypopularity');
export const fetchAiringAnime = createFetchThunk('airing');
export const fetchUpcomingAnime = createFetchThunk('upcoming');
export const fetchFavoriteAnime = createFetchThunk('favorite');

const initialState = {
    topratedAnime: [],
    bypopularityAnime: [],
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
            const thunk = createFetchThunk(category);
            
            builder
                .addCase(thunk.pending, (state) => {
                    state.loading[category] = true;
                })
                .addCase(thunk.fulfilled, (state, action) => {
                    state[`${category}Anime`] = action.payload;
                    state.loading[category] = false;
                })
                .addCase(thunk.rejected, (state, action) => {
                    state.loading[category] = false;
                    state.error = action.error.message || 'An unknown error occurred';
                });
        });
    }
});

export default animeHomeSlice.reducer;

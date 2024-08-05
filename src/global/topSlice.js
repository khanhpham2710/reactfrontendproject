import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

export const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"];
export const statuses = ["airing", "complete", "upcoming"];
export const orderby = ["mal_id", "title", "start_date", "end_date", "episodes", "score", "scored_by", "rank", "popularity", "members", "favorites"];


export const fetchAnimes = createAsyncThunk(
    'top/fetchAnimes',
    async (type,filter,page,limit) => {
        const response = await axios.get(`${baseURL}/top/anime?type=${type}&filter=${filter}&sfw=true&page=${page}&limit=${limit}`);
        return response.data.data
    }
);

const topSlice = createSlice({
    name: 'top',
    initialState: {
        animes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAnimes.fulfilled, (state, action) => {
                state.animes = action.payload
                state.loading = false;
            })
            .addCase(fetchAnimes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An unknown error occurred';
            })
    }
});

export default topSlice.reducer;

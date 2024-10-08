import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = "https://api.jikan.moe/v4";

export const types = ["tv", "movie", "ova", "special", "ona", "music", "cm", "pv", "tv_special"];
export const filters = ["airing", "complete", "upcoming"];
export const orderby = ["mal_id", "title", "start_date", "end_date", "episodes", "score", "scored_by", "rank", "popularity", "members", "favorites"];

export const fetchAnimes = createAsyncThunk(
    'top/fetchAnimes',
    async ({ type, filter, page, limit, genres }) => {
        const response = await axios.get(`${baseURL}/top/anime`, {
            params: {
                type,
                filter,
                sfw: true,
                genres,
                page,
                limit
            }
        });
        return response.data;
    }
);


export const fetchGenres = createAsyncThunk(
    'top/fetchGenres',
    async ({genresList,page}) => {
        const response = await axios.get(`${baseURL}/anime?genres=${genresList}&page=${page}&limit=16`);
        return response.data;
    }
)

const topSlice = createSlice({
    name: 'top',
    initialState: {
        animes: [],
        genresAnimes: [],
        total: 0,
        lastPage: 0,
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
                state.animes = action.payload.data;
                state.total = action.payload.pagination.items.total
                state.lastPage = action.payload.pagination.last_visible_page
                state.loading = false;
            })
            .addCase(fetchAnimes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An unknown error occurred';
            })
            .addCase(fetchGenres.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.genresAnimes = action.payload.data;
                state.loading = false;
                state.total = action.payload.pagination.items.total
                state.lastPage = action.payload.pagination.last_visible_page
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An unknown error occurred';
            })
    }
});

export default topSlice.reducer;

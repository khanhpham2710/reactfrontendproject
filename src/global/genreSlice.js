import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSearch = createAsyncThunk(
    'genre/fetchSearch',
    async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/genres/anime`);
        return response.data.data;
    });

const genreSlice = createSlice({
    name: 'genre',
    initialState: {
        genre: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.genre = action.payload;
                state.loading = false;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default genreSlice.reducer;

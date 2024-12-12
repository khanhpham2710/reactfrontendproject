import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.jikan.moe/v4/anime';

const endpoints = ['recommendations', 'reviews', 'relations', 'themes'];

// Create fetch thunk for each endpoint
const createFetchThunk = (endpoint) => {
  return createAsyncThunk(
    `anime/fetch${endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}`,
    async (animeId) => {
      const response = await axios.get(`${baseURL}/${animeId}/${endpoint}`);
      return response.data.data;
    }
  );
};

// Thunk for fetching anime details
export const fetchAnimeDetails = createAsyncThunk(
  'anime/fetchDetails',
  async (animeId) => {
    const response = await axios.get(`${baseURL}/${animeId}/full`);
    // console.log('Anime Details Response:', response.data.data); 
    return response.data.data;
  }
);

// Thunk for fetching characters
export const fetchAnimeCharacters = createAsyncThunk(
  'anime/fetchCharacters',
  async (animeId) => {
    const response = await axios.get(`${baseURL}/${animeId}/characters`);
    return response.data.data;
  }
);

export const fetchAnimeRecommendation = createFetchThunk('recommendations');
export const fetchAnimeReviews = createFetchThunk('reviews');
export const fetchAnimeRelations = createFetchThunk('relations');


const initialState = {
  details: {},
  recommendations: [],
  reviews: [],
  relations: [],
  themes: [],
  characters: [],
  status_loading: 'idle',
  error: null,
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetching details
    builder
      .addCase(fetchAnimeDetails.pending, (state) => {
        state.status_loading = 'loading';
      })
      .addCase(fetchAnimeDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.status_loading = 'succeeded';
      })
      .addCase(fetchAnimeDetails.rejected, (state, action) => {
        state.status_loading = 'failed';
        state.error = action.error.message;
      });

    // Handle fetching characters
    builder
      .addCase(fetchAnimeCharacters.pending, (state) => {
        state.status_loading = 'loading';
      })
      .addCase(fetchAnimeCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.status_loading = 'succeeded';
      })
      .addCase(fetchAnimeCharacters.rejected, (state, action) => {
        state.status_loading = 'failed';
        state.error = action.error.message;
      });

    // Handle other endpoints
    endpoints.forEach((endpoint) => {
      const thunk = createFetchThunk(endpoint);
      builder
        .addCase(thunk.pending, (state) => {
          state.status_loading = 'loading';
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state[endpoint] = action.payload;
          state.status_loading = 'succeeded';
        })
        .addCase(thunk.rejected, (state, action) => {
          state.status_loading = 'failed';
          state.error = action.error.message;
        });
    });
  },
});

export default animeSlice.reducer;

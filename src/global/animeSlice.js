import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  details: {},
  characters: [],
  status_loading: 'idle',
  error: null,
}


export const fetchAnimeDetails = createAsyncThunk(
  'anime/fetchAnimeDetails',
  async (animeId) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
    const data = await response.json();
    return data.data;
  }
);

export const fetchAnimeCharacters = createAsyncThunk(
  'anime/fetchAnimeCharacters',
  async (animeId) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
    const data = await response.json();
    return data.data;
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeDetails.pending, (state) => {
        state.status_loading = 'loading';
      })
      .addCase(fetchAnimeDetails.fulfilled, (state, action) => {
        state.status_loading = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchAnimeDetails.rejected, (state, action) => {
        state.status_loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAnimeCharacters.pending, (state) => {
        state.status_loading = 'loading';
      })
      .addCase(fetchAnimeCharacters.fulfilled, (state, action) => {
        state.status_loading = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(fetchAnimeCharacters.rejected, (state, action) => {
        state.status_loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default animeSlice.reducer;

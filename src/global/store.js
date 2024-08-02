import { configureStore } from '@reduxjs/toolkit';
import animeReducer from './animeSlice';
import characterReducer from './characterSlice';
import searchReducer from './searchSlice';
import animeListSlice from './animeListSlice';


const store = configureStore({
  reducer: {
    anime: animeReducer,
    character: characterReducer,
    search: searchReducer,
    animeList: animeListSlice
  },
});

export default store
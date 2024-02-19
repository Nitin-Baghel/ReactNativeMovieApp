import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  results: [],
  loading: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state: any, action) => {
      let results = action.payload;
      state.results = [...state.results, ...results];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearData: state => {
      state.results = [];
    },
  },
});

export const {setMovies, setLoading, clearData} = moviesSlice.actions;

export default moviesSlice.reducer;

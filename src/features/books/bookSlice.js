import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks, fetchPanels } from './bookAsyncActions';

const initialState = {
  books: [],
  panels: [],
  loading: true,
  loadingPanel: true
};


export const bookSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchPanels.pending, (state) => {
        state.loadingPanel = true;
      })
      .addCase(fetchPanels.fulfilled, (state, action) => {
        state.loadingPanel = false;
        state.panels = action.payload;
      })
      ;
  },
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;

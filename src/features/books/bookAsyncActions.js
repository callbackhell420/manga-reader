import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllBooks = createAsyncThunk(
    'counter/fetchAllBooks',
    async () => {
      const response = await axios.get('books/');
      return response.data;
    }
);

export const fetchPanels = createAsyncThunk(
  'counter/fetchPanels',
  async (chapterId) => {
    const response = await axios.get(`chapters/${chapterId}/`);
    return response.data;
  }
);
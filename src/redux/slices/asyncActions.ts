import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza } from './pizza/types';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`,
    );
    return data;
  },
);

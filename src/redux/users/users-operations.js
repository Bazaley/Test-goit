import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios('http://localhost:3030/api/users', {
        params: { page, limit },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

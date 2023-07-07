import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('http://localhost:3030/api/users');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

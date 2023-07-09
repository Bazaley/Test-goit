import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://64a5b75d00c3559aa9c01a2d.mockapi.io/api/users',
        {
          params: { page, limit },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, follow, newFollowers }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `https://64a5b75d00c3559aa9c01a2d.mockapi.io/api/users/${id}`,
        { follow, followers: newFollowers }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUsersAll = createAsyncThunk(
  'users/fetchUsersAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://64a5b75d00c3559aa9c01a2d.mockapi.io/api/users'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUsersFollow = createAsyncThunk(
  'users/fetchUsersFollow',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://64a5b75d00c3559aa9c01a2d.mockapi.io/api/users',
        { params: { follow: false } }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUsersFollowing = createAsyncThunk(
  'users/fetchUsersFollowing',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://64a5b75d00c3559aa9c01a2d.mockapi.io/api/users',
        { params: { follow: true } }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

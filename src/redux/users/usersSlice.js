import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers } from './users-operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchUsers.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchUsers.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const usersReducer = usersSlice.reducer;

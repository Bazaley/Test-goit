import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUsers,
  updateUser,
  fetchUsersAll,
  fetchUsersFollow,
  fetchUsersFollowing,
} from './users-operations';

const initialState = {
  users: [],
  limit: null,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    clearUsers(state) {
      state.users = [];
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload];
        state.limit = payload.length;
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const user = state.users.findIndex(({ id }) => payload.id === id);
        state.users.splice(user, 1, payload);
        state.isLoading = false;
      })
      .addCase(fetchUsersAll.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })

      .addCase(fetchUsersFollow.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })

      .addCase(fetchUsersFollowing.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(fetchUsers.pending, updateUser.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(fetchUsers.rejected, updateUser.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { clearUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

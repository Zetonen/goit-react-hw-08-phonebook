import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    search(state, action) {
      return action.payload;
    },
  },
});

export const { search } = slice.actions;
export const sliceFilter = slice.reducer;

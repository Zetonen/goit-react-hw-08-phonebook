import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter', 
  initialState: '', 
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { search } = slice.actions;
export const sliceFilter = slice.reducer;
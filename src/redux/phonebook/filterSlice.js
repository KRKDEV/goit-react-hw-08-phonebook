const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  status: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectStatusFilter = state => state.filter;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
};

export const pictiureUrlSlice = createSlice({
  name: "PictureUrl",
  initialState,
  reducers: {
    storeUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeUrl } = pictiureUrlSlice.actions;

export default pictiureUrlSlice.reducer;

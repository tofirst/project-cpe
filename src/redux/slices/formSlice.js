import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    email: "",
  },
  imgUrl: "",
  secure: {
    point: "",
    difficulty: "",
    questionsSecure: {
      question: "",
      answer: "",
    },
  },
  password: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUsername: (state, action) => {
      state.user = action.payload;
    },
    addImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    addSecure: (state, action) => {
      state.secure = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUsername, addImageUrl } = formSlice.actions;

export default formSlice.reducer;

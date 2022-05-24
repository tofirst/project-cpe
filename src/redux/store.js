import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/reducers/counter";
import pictiureUrlSlice from "redux/reducers/pictureUrl";

export const store = configureStore({
  reducer: {
    signUpWithPictureStep: counterReducer,
    pictureUrl: pictiureUrlSlice,
  },
});

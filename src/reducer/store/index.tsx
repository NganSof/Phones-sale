import { configureStore } from "@reduxjs/toolkit";
import PhoneReducer from "../reducerPhone/Phone";

export const store = configureStore({
  reducer: {
    phones: PhoneReducer,
  },
});

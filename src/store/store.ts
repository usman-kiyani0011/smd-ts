import { configureStore } from "@reduxjs/toolkit";
import myBookingReducer from "./features/myBookingSlice";

export const store = configureStore({
  reducer: {
    myBooking: myBookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

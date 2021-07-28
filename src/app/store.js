import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../feature/car/carSlice"; 

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

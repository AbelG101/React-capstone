import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './Redux/reducer';

const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;

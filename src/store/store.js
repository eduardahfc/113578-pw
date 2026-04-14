import { configureStore } from '@reduxjs/toolkit';
import atmReducer from './atmSlice'; 

const store = configureStore({
  reducer: {
    atm: atmReducer
  }
});


export default store;
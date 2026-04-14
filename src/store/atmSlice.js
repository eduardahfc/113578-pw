import { createSlice } from '@reduxjs/toolkit';

const atmSlice = createSlice({
  name: 'atm',
  initialState: { balance: 1000 }, 
  reducers: {
    depositar(state, action) {
      state.balance += Number(action.payload);
    },
    levantar(state, action) {
      state.balance -= Number(action.payload);
    }
  }
});

export const { depositar, levantar } = atmSlice.actions; 
export default atmSlice.reducer;
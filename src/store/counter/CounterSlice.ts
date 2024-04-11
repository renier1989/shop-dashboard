import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    counter: number;
}

const initialState: CounterState = {
counter: 5
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
});

export const {} = CounterSlice.actions;

export default CounterSlice.reducer;
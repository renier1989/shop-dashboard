import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
count: 5,
isReady:false
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
//   aqui se definen todas las acciones a ejecutarse
  reducers: {

    // con esta funcion evitamos que se este reseteando el valor del counter
    initialReadyState(state,action:PayloadAction<number>){
      if(state.isReady ) return;
      state.count = action.payload
      state.isReady = true

    },
    // no se recomienda hacer la desestrucutracion de lo que esta en el initialState
    moreCount(state){
        state.count++;  // aqui puedo mutar sin problemas el state
    },
    lessCount(state){
        if(state.count === 0) return; // para que el contador no sean numeros por debajo del 0
        state.count--;
    },
    resetCount(state, action:PayloadAction<number>){
        // aqui el state tiene que cambien en base a lo que se le esta pasando al action
        if(action.payload < 0) action.payload = 0;
        state.count = action.payload
    }

  }
});

export const {moreCount, lessCount,initialReadyState, resetCount} = CounterSlice.actions;

export default CounterSlice.reducer;
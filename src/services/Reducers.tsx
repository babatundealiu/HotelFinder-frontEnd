import { createSlice } from '@reduxjs/toolkit'

const initialState = {
count: 0
}

const Reducers = createSlice({
  name: "counting",
  initialState,
  reducers: {
    increment:(state)=>{
        state.count += 1
    },
      decrement : (state)=>{
        state.count -= 1
        if (state.count === -1){
          state.count = 0
        }
    }
  }
});


export const {increment, decrement} = Reducers.actions

export default Reducers.reducer
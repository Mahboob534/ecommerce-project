import { createSlice } from '@reduxjs/toolkit'

export const TokenSlice = createSlice({
  name: 'token',
  initialState: 
     false,
  
  reducers: {
    setToken: (state,action) => {
      return action.payload
    },
  },
})


export const { setToken } = TokenSlice.actions

export default TokenSlice.reducer
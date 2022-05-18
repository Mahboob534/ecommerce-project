import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: 
     false,
  
  reducers: {
    setlogin: (state,action) => {
      return action.payload
    },
  },
})


export const { setlogin } = adminSlice.actions

export default adminSlice.reducer
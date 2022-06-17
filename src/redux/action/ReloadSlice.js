import {createSlice} from '@reduxjs/toolkit';
export const ReloadSlice= createSlice({
    name:'Reload',
    initialState:false,
    reducers:{
        setReload:(state,action)=>{
            return action.payload
        
        },
        
    }
})
export const {setReload}=ReloadSlice.actions 
export default ReloadSlice.reducer
import {createSlice} from '@reduxjs/toolkit';
export const OrderSlice= createSlice({
    name:'orders',
    initialState:{},
    reducers:{
        setOrders:(state,action)=>{
           state.order= action.payload
        
        },
        
    }
})
export const {setOrders}=OrderSlice.actions 
export default OrderSlice.reducer
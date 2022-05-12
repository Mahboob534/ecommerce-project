import {createSlice} from '@reduxjs/toolkit';
export const ProductSlice= createSlice({
    name:'product',
    initialState:{},
    reducers:{
        setProduct:(state,action)=>{
            return action.payload
        
        },
        
    }
})
export const {setProduct}=ProductSlice.actions 
export default ProductSlice.reducer
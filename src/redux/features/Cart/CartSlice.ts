import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface ICart{
    products:IProduct[]
}

const initialState:ICart ={
    products:[]
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
      addToCart:(state,action:PayloadAction<IProduct>)=>{
        const existing = state.products.find(product => product._id === action.payload._id)
         if(existing){
          existing.quantity = existing.quantity!+1 
         }
         else{
          state.products.push({...action.payload,quantity:1})
         }
             
      },
      removeone:(state,action:PayloadAction<IProduct>)=>{
        const existing = state.products.find(product => product._id === action.payload._id)
         if(existing && existing.quantity!> 1){
          existing.quantity = existing.quantity! - 1 
         }
         else{
            state.products =  state.products.filter(product => product._id !== action.payload._id) 
         }
             
      },
      removeFromCart:(state,action:PayloadAction<IProduct>)=>{
        state.products =  state.products.filter(product => product._id !== action.payload._id)   
      }
    }
})

export const {addToCart,removeFromCart,removeone} = cartSlice.actions

export default cartSlice.reducer;
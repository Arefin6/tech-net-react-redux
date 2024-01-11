import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './features/Cart/CartSlice';
import ProductSlice from './features/Product/ProductSlice';

const store = configureStore({
   reducer:{
      cart:CartSlice,
      product:ProductSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
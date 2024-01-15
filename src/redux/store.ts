import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './features/Cart/CartSlice';
import ProductSlice from './features/Product/ProductSlice';
import { api } from './api/apiSlice';

const store = configureStore({
   reducer:{
      cart:CartSlice,
      product:ProductSlice,
      [api.reducerPath]: api.reducer,
   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
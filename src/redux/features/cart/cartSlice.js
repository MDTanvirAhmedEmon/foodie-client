import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(product => product._id === action.payload._id);
      if(existing){
          existing.quantity = existing.quantity + 1;
      }else{
          state.products.push({...action.payload, quantity: 1});
      }
      state.total += action.payload.price;
    },

    
    removeOne: (state, action) => {
      const existing = state.products.find(product => product._id === action.payload._id);
      if(existing && existing.quantity > 1) {
          existing.quantity = existing.quantity - 1;
      }else{
          state.products = state.products.filter(product => product._id !== action.payload._id)
      }
      state.total -= action.payload.price;
    },


    removeAll: (state, action) => {
      state.products = state.products.filter(product => product._id !== action.payload._id)
      state.total -= action.payload.price * action.payload.quantity;
    },
    makeEmpty: (state) => {
      state.products = []
      state.total = 0;
    },
  },
})


export const { addToCart, removeOne, removeAll, makeEmpty } = cartSlice.actions;

export default cartSlice.reducer;
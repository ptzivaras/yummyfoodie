// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // later: addToCart, removeFromCart…
  }
})

export default cartSlice.reducer

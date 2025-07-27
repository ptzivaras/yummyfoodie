import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],   // array of dish objects in the cart
  },
  reducers: {
    addToCart(state, action) {
      // action.payload should be the full dish object
      state.items.push(action.payload)
    },
    removeFromCart(state, action) {
      // action.payload is the dish id
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

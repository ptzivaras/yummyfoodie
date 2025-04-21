import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../features/dishes/dishesSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
  },
});

export default store


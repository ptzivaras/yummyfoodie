import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../features/dishes/dishesSlice';
import cartReducer from '../features/cart/cartSlice';
import filtersReducer from '../features/filters/filtersSlice'; 

const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
    filters: filtersReducer 
  }
});

export default store;
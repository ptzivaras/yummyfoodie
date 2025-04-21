// src/features/dishes/dishesSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: [],
  reducers: {
    // later: fetchDishes, setFilters…
  }
})

export default dishesSlice.reducer


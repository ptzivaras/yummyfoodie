import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dietaryPreferences: [],
  allergens: [],
  priceRange: [0, 100] 
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDietaryPreference: (state, action) => {
      state.dietaryPreferences = action.payload;
    },
    setAllergens: (state, action) => {
      state.allergens = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetFilters: () => initialState
  }
});

export const { setDietaryPreference, setAllergens, setPriceRange, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
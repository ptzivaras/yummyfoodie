import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dietaryPreferences: [],
  allergens: [],
  priceRange: [0, 100] // [min, max]
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
  },
  // ONLY ADD THIS SECTION (keep everything else exactly as you have it)
  extraReducers: (builder) => {
    builder.addCase('navigation/RESET', () => initialState);
  }
});

export const { setDietaryPreference, setAllergens, setPriceRange, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
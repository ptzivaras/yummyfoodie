import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDishes = createAsyncThunk(
  'dishes/fetchDishes',
  async () => {
    const { data } = await axios.get('http://localhost:5195/api/dishes')
    return data
  }//5173,5195
)

const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    list: [],          // where the fetched dishes will go
    status: 'idle',    // tracks whether we’re waiting / succeeded / failed.... it starts as  'idle' if not started yet
    error: null,       // holds any error message
  },
  reducers: {
    // later: fetchDishes, setFilters…
  },
  extraReducers: builder =>{
    builder
    .addCase(fetchDishes.pending, state => { state.status = 'loading' })
    .addCase(fetchDishes.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.list = action.payload
    })
    .addCase(fetchDishes.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})


export const selectFilteredDishes = (state) => {
  const { list } = state.dishes;
  const { dietaryPreferences, allergens, priceRange } = state.filters;

  return list.filter(dish => {
    // Price filter
    if (dish.price < priceRange[0] || dish.price > priceRange[1]) return false;

    // Dietary preferences filter
    if (dietaryPreferences.length > 0) {
      const hasAllPreferences = dietaryPreferences.every(pref => 
        dish.tags.dietaryPreferences.includes(pref)
      );
      if (!hasAllPreferences) return false;
    }

    // Allergens filter (exclude dishes containing selected allergens)
    if (allergens.length > 0) {
      const hasExcludedAllergen = allergens.some(allergen => 
        dish.tags.allergens.includes(allergen)
      );
      if (hasExcludedAllergen) return false;
    }

    return true;
  });
};

export default dishesSlice.reducer


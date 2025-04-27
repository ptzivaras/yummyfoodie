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

export default dishesSlice.reducer


import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  products: [],
  checkSearch: false,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },

    setCheckSearch(state, action) {
      state.checkSearch = action.payload
    }
  }
})

export const { setProducts, setCheckSearch } = productSlice.actions

export default productSlice.reducer;
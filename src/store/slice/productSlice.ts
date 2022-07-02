import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  products: [],
  checkSearch: false,
  pages: 1,
  filterArrProducts: [],
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
    },

    setPages(state, action) {
      state.pages = action.payload
    },

    setFilterArrProducts(state, action) {
      state.filterArrProducts = action.payload
    }
  }
})

export const {
  setProducts,
  setCheckSearch,
  setPages,
  setFilterArrProducts } = productSlice.actions

export default productSlice.reducer;
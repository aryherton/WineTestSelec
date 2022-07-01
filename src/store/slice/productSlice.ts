import {createSlice} from '@reduxjs/toolkit'
import { setHttpAgentOptions } from 'next/dist/server/config'

let initialState = {
  products: [],
  checkSearch: false,
  pages: 1,
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
    }
  }
})

export const { setProducts, setCheckSearch, setPages } = productSlice.actions

export default productSlice.reducer;
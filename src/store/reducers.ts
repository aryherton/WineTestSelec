import { combineReducers } from 'redux'

import products from './slice/productSlice'

const reducers = combineReducers({ 
  products,
})

export default reducers;
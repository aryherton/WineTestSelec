import { configureStore } from '@reduxjs/toolkit';

import productReducer from './reducers';

export default configureStore({
  reducer: productReducer
});
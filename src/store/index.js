import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import dimdLayerReducer from './slice/dimdLayerLegacySlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dimdLayer: dimdLayerReducer
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { ICounterStatus } from '@/store/slice/counterSlice';
import dimdLayerReducer, { IDimdLayerStateLegacy } from '@/store/slice/dimdLayerLegacySlice';

export interface IRootStore {
  counter: ICounterStatus,
  dimdLayer: IDimdLayerStateLegacy
}

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dimdLayer: dimdLayerReducer
  }
});

export default store;

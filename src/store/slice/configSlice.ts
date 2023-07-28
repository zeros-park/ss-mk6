import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISliceConfig {
  isCompleteFirstRender: boolean
}

const initialState: ISliceConfig = {
  isCompleteFirstRender: false
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    isCompleteFirstRender: (state, actions: PayloadAction<boolean>) => {
      state.isCompleteFirstRender = actions.payload;
    },
  },
});

export const {
  isCompleteFirstRender
} = configSlice.actions;
export default configSlice.reducer;

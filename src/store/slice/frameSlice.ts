import { createSlice } from '@reduxjs/toolkit';

export type Ilayout = {
  mediaWidthOptions: {
    minimal: number,
    simple: number,
  },
  asideLeftSizeOptions: {
    minimal: null,
    simple: number,
    default: number,
  },
  headerHeightSize: number,
}
export interface IStateLayout {
  layout: Ilayout
}

const initialState: IStateLayout = {
  layout: {
    mediaWidthOptions: {
      simple: 750,
      minimal: 450,
    },
    asideLeftSizeOptions: {
      default: 200,
      simple: 80,
      minimal: null,
    },
    headerHeightSize: 50,
  }
}

export const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {

  },
});

export const { } = frameSlice.actions;
export default frameSlice.reducer;

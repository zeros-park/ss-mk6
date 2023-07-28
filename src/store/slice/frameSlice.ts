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
      minimal: 300,
      simple: 600,
    },
    asideLeftSizeOptions: {
      minimal: null,
      simple: 60,
      default: 200,
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

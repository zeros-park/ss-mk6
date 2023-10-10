import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Ilayout = {
  mediaWidthOptions: {
    minimal: number,
    simple: number,
  },
  asideLeftSizeOptions: {
    default: number,
    simple: number,
    minimal: number,
  },
  headerHeightSize: number,
}
type currentLayout = 'default' | 'simple' | 'minimal'
export interface IStateLayout {
  layout: Ilayout,
  currentLayout: currentLayout,
  asideCustomize: boolean,
  asideFlod: boolean,
}

const initialState: IStateLayout = {
  layout: {
    mediaWidthOptions: {
      simple: 1100,
      minimal: 650,
    },
    asideLeftSizeOptions: {
      default: 200,
      simple: 80,
      minimal: 0,
    },
    headerHeightSize: 50,
  },
  currentLayout: 'default',
  asideCustomize: false,
  asideFlod: true,
}

export const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    setCurrentLayout: (state, actions: PayloadAction<currentLayout>) => {
      state.currentLayout = actions.payload;
    },
    setAsideCustomize: (state, actions: PayloadAction<boolean>) => {
      state.asideCustomize = actions.payload;
    },
    toggleAsideCustomize: (state) => {
      state.asideCustomize = (state.asideCustomize === false);
    },
    setAsideFlod: (state, actions: PayloadAction<boolean>) => {
      state.asideFlod = actions.payload;
    },
  },
});

export const {
  setCurrentLayout,
  setAsideCustomize,
  toggleAsideCustomize,
  setAsideFlod,
} = frameSlice.actions;
export default frameSlice.reducer;

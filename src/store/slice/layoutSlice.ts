import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export type colorMode = 'white' | 'dark' | 'system'
export type responsiveOptions = {
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
  colorMode: colorMode,
  responsiveOptions: responsiveOptions
}

// const mode: colorMode = (Cookies.get('colorMode') || "system") as colorMode;
// const mode: colorMode = "system";
const initialState: IStateLayout = {
  colorMode: "system",
  responsiveOptions: {
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

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setColorMode: (state, actions: PayloadAction<colorMode>) => {
      state.colorMode = actions.payload;
      Cookies.set('colorMode', actions.payload);
    },
  },
});

export const {
  setColorMode
} = layoutSlice.actions;
export default layoutSlice.reducer;

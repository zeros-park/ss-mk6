import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export type colorMode = 'white' | 'dark' | 'system'
export interface ISliceDocument {
  isCompleteFirstRender: boolean,
  colorMode: colorMode,
}
const prefix = process.env.NEXT_PUBLIC_COOKIE_PREFIX || '';
const cookieList = {
  colorMode: `${prefix}colorMode`,
}
export const getColorModeOnServerSide = (cookies: NextApiRequestCookies) => {
  return (cookies[cookieList.colorMode] as colorMode) || initialState.colorMode;
}

const initialState: ISliceDocument = {
  isCompleteFirstRender: false,
  colorMode: "system",
}
export const documentSlice = createSlice({
  name: 'cookie',
  initialState,
  reducers: {
    isCompleteFirstRender: (state, actions: PayloadAction<boolean>) => {
      state.isCompleteFirstRender = actions.payload;
    },
    setColorMode: (state, actions: PayloadAction<colorMode>) => {
      state.colorMode = actions.payload;
      Cookies.set(cookieList.colorMode, actions.payload);
    },
  },
});

export const {
  isCompleteFirstRender,
  setColorMode,
} = documentSlice.actions;
export default documentSlice.reducer;

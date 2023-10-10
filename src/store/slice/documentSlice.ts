import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

export type colorMode = 'light' | 'dark' | 'system'
export interface bgColorSet {
  lightBG: string,
  lightFont: string,
  darkBG: string,
  darkFont: string,
}
export interface ISliceDocument {
  isCompleteFirstRender: boolean,
  colorMode: colorMode,
  colorSet: bgColorSet,
  routerPathname: string,
  routerRefreshTrigger: number,
}
const prefix = process.env.NEXT_PUBLIC_COOKIE_PREFIX || '';
const cookieList = {
  colorMode: `${prefix}colorMode`,
}

const initialState: ISliceDocument = {
  isCompleteFirstRender: false,
  colorMode: "system",
  colorSet: {
    lightBG: 'white',
    lightFont: 'black',
    darkBG: '#424040',
    darkFont: '#939393',
  },
  routerPathname: '',
  routerRefreshTrigger: 0,
}
export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    isCompleteFirstRender: (state, actions: PayloadAction<boolean>) => {
      state.isCompleteFirstRender = actions.payload;
    },
    setColorMode: (state, actions: PayloadAction<colorMode>) => {
      state.colorMode = actions.payload;
      Cookies.set(cookieList.colorMode, actions.payload);
    },
    setRouterPathname: (state, actions: PayloadAction<string>) => {
      state.routerPathname = actions.payload;
    },
    updateRouterRefreshTrigger: (state) => {
      state.routerRefreshTrigger = state.routerRefreshTrigger + 1;
    }
  },
});

export const getColorModeOnServerSide = (cookies: NextApiRequestCookies) => {
  return (cookies[cookieList.colorMode] as colorMode) || initialState.colorMode;
}

export const {
  isCompleteFirstRender,
  setColorMode,
  setRouterPathname,
  updateRouterRefreshTrigger,
} = documentSlice.actions;
export default documentSlice.reducer;

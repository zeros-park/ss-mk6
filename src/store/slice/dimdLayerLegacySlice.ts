import { createSlice } from '@reduxjs/toolkit';

export type positionType = 'center' | 'left' | 'right' | 'bottom' | 'top' | undefined;
export type extendType = 'width' | 'height' | 'full' | 'default' | undefined;

export const validTypes = (positionType: positionType, extendType: extendType) => {
  return (positionType !== undefined) && (extendType !== undefined)
}

export interface IDimdLayerStateLegacy {
  type: {
    isShowDimd: boolean,
    isRequestShow: boolean,
    isShowContent: boolean,
    extendType: extendType,
    positionType: positionType,
  }
}
const initialState: IDimdLayerStateLegacy = {
  type: {
    isShowDimd: true,
    isRequestShow: false,
    isShowContent: false,
    extendType: undefined,
    positionType: undefined,
  }
}
const dimdLayerSlice = createSlice({
  name: 'dimdLayer',
  initialState,
  reducers: {
    show: (state) => {
      state.type.isShowContent = true;
    },
    hide: (state) => {
      state.type.isRequestShow = false;
      state.type.isShowContent = false;
    },
    open: (state, { payload }) => {
      const [positionType, extendType] = payload;

      if (validTypes(positionType, extendType)) {
        state.type.isRequestShow = true;
        state.type.positionType = positionType;
        state.type.extendType = extendType;
      } else {
        state.type.positionType = undefined;
        state.type.extendType = undefined;
      }
    },
    close: (state) => {
      state.type.positionType = undefined;
      state.type.extendType = undefined;
    }
  }
});

export const { show, hide, open, close } = dimdLayerSlice.actions;
export default dimdLayerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export type positionType = 'center' | 'left' | 'right' | 'bottom' | 'top' | null;
export type extendType = 'width' | 'height' | 'full' | 'default' | null;

export const validTypes = (positionType: positionType, extendType: extendType) => {
  return (positionType !== null) && (extendType !== null)
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
    extendType: null,
    positionType: null,
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
        state.type.positionType = null;
        state.type.extendType = null;
      }
    },
    close: (state) => {
      state.type.positionType = null;
      state.type.extendType = null;
    }
  }
});

export const { show, hide, open, close } = dimdLayerSlice.actions;
export default dimdLayerSlice.reducer;

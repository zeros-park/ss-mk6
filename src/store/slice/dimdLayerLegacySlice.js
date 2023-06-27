import { createSlice } from '@reduxjs/toolkit';

/**
 * todo : 추후 ts로 변경하면 사라질 방식임
 */
const validPositionType = (positionType) => {
  return ['center', 'left', 'right', 'bottom', 'top']
    .indexOf(positionType) !== -1;
}
/**
 * todo : 추후 ts로 변경하면 사라질 방식임
 */
const validExtendType = (extendType) => {
  return ['width', 'height', 'full', 'default']
    .indexOf(extendType) !== -1;
}
export const validTypes = (positionType, extendType) => {
  return validPositionType(positionType) && validExtendType(extendType);
}
const dimdLayerSlice = createSlice({
  name: 'dimdLayer',
  initialState: {
    type: {
      isShowDimd: true,
      isRequestShow: false,
      isShowContent: false,
      extendType: undefined,
      positionType: undefined,
    }
  },
  reducers: {
    show: (state) => {
      state.type.isShowContent = true;
    },
    hide: (state) => {
      state.type.isRequestShow = false;
      state.type.isShowContent = false;
    },
    open: (state, {payload}) => {
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

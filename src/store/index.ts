import {
  CombinedState,
  combineReducers,
  configureStore,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import document, { ISliceDocument } from '@/store/slice/documentSlice';
import counter, { ICounterStatus } from '@/store/slice/counterSlice';
import dimdLayer, { IDimdLayerStateLegacy } from '@/store/slice/dimdLayerLegacySlice';
import layout, { IStateLayout } from '@/store/slice/frameSlice';

export interface IRootStore {
  document: ISliceDocument
  counter: ICounterStatus,
  dimdLayer: IDimdLayerStateLegacy,
  layout: IStateLayout,
}

// const store = configureStore<IRootStore>({
//   reducer: {
//     counter: counterReducer,
//     dimdLayer: dimdLayerReducer,
//     layout: layoutSlice,
//   },
// });
// export default store;

type appReducer = Reducer<CombinedState<IRootStore>, PayloadAction<IRootStore>>
const rootReducer: appReducer = combineReducers<IRootStore>({
  document,
  counter,
  dimdLayer,
  layout,
})

export const reducer: appReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      /**
       * 1. 페이지 첫 진입시에는 서버렌더링 시에 생성되는 store 를 사용해서 병합니다.
       * 2. 첫 진입 이후에는 클라이언트에 세팅된 store 를 재사용하는 형식으로 대응한다.
       */
      if (state?.document.isCompleteFirstRender !== true) {
        return {
          ...state,
          ...action.payload
        };
      } else {
        return rootReducer(state, action);
      }
    default:
      return rootReducer(state, action);
  }
};

// const customMiddleware: Middleware = (store) => (next) => (action) => {
//   // 미들웨어 로직 수행
//   console.log('Dispatching action:', action);
//   // 다음 미들웨어 또는 리듀서에 액션 전달
//   const result = next(action);
//   // 미들웨어 로직 수행
//   console.log('New state:', store.getState());
//   // 다음 미들웨어 또는 리듀서로부터 반환된 결과 반환
//   return result;
// };

// const makeStore = () => createStore(reducer)
const makeStore = () => configureStore({
  reducer: reducer,
  // middleware: (gDM) => gDM().concat(customMiddleware)
});

export const wrapper = createWrapper(makeStore, {
  // debug: true,
  debug: false,
});
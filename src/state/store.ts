import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";

import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ProductReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
//@ts-ignore
window.store = store;

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

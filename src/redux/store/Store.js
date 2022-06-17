import { configureStore } from "@reduxjs/toolkit";
import productReduser from "../action/ProductSlice";
import TokenReduser from "../action/TokenSlice";
import CategoryReduser from "../action/CategorySlice";
import { ACCESS_TOKEN } from "../../config/variable.config";
import cartReducer, { getTotals } from "../action/cartSlice";
import OrderReduser from '../action/orederSlice'
import ReloadSlice from '../action/ReloadSlice'
export const store = configureStore({
  devTools: true,
  preloadedState:loadpresatate(),
  reducer: {
    token: TokenReduser,
    category: CategoryReduser,
    product: productReduser,
    cart: cartReducer,
    orders:OrderReduser,
    reload:ReloadSlice,
  },
});

function saveState(state) {
  try {
    const serialisedState = JSON.stringify(state.ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadpresatate() {
  try {
    const serialisedState = localStorage.getItem(ACCESS_TOKEN);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

store.subscribe(() => saveState({ ACCESS_TOKEN: store.getState().token }));

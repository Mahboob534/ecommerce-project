import { configureStore } from "@reduxjs/toolkit";
import productReduser from "../action/ProductSlice";
import adminReduser from "../action/AdminSlice";
import CategoryReduser from "../action/CategorySlice";

export const store = configureStore({
  devTools: true,
  // preloadedState:loadpresatate(),
  reducer: {
    admin: adminReduser,
    category: CategoryReduser,
    product: productReduser,
  },
});

function saveState(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("login", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadpresatate() {
  try {
    const serialisedState = localStorage.getItem("login");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

store.subscribe(() => saveState({ login: store.getState().admin }));

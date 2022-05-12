import { configureStore } from '@reduxjs/toolkit'
import productReduser from  '../action/ProductSlice'
import adminReduser from '../action/AdminSlice'
export const store = configureStore({
    devTools: true,
   // preloadedState:loadpresatate(),
    reducer: {
        product: productReduser,
        admin:adminReduser
       
    }

})

// function saveState(state) {
//     try {
//         const serialisedState = JSON.stringify(state);
//         localStorage.setItem("state", serialisedState);
//     } catch (e) {
//         console.warn(e);
//     }
// }


// function loadpresatate() {
//     try {
//         const serialisedState = localStorage.getItem("state");
//         if (serialisedState === null) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (e) {
//         console.warn(e);
//         return undefined;
//     }
// }

// store.subscribe(() =>
//     saveState({ user: store.getState().user })
// )
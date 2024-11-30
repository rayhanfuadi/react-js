// konfigurasi store redux
import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./redux";

// store
const store = configureStore({
    reducer: {
        film: filmReducer,
    }
})
console.log("on create: ", store.getState())

// subscribe
store.subscribe(() => {
    console.log("ON CHANGE: ", store.getState())
})

export default store
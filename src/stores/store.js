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

// dispatch
// store.dispatch(filmSlice.actions.addFilm({ id: 1, tittle: "suzume", badge: "BadgeBiru" }))
// store.dispatch(filmSlice.actions.addFilm({ id: 2, tittle: "big hero 6", badge: "BadgeMerah" }))
// store.dispatch(filmSlice.actions.deleteFilm(1))


// const store = configureStore({
//     reducer: {
//         film: filmSlice.reducer,
//     }
// })
// console.log(`on create film: `, store.getState());

// store.subscribe(() => {
//     console.log("ON CHANGE: ", store.getState())
// })

// store.dispatch(filmSlice.actions.addFilm({ id: 1, tittle: "Suzume", badge: "BadgeBiru" }))
// store.dispatch(filmSlice.actions.addFilm({ id: 2, tittle: "Big Hero 6", badge: "BadgeBiru" }))
// store.dispatch(filmSlice.actions.deleteFilm(1))
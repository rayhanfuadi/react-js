// misi FE Advance 2 STEP 3: Implementasi State Management
import { createSlice, } from "@reduxjs/toolkit";

const filmReducer = createSlice({
    name: "film",
    initialState: {
        data: JSON.parse(localStorage.getItem("film")) || [],
    },
    reducers: {
        addFilm(state, action) {
            const newFilmItem = {
                id: action.payload.id,
                tittle: action.payload.tittle,
                badge: action.payload.badge,
                img: action.payload.img,
            };

            if (!state.data.some((e) => e.id === action.payload.id)) {
                const newFilm = [...state.data, newFilmItem]
                state.data = newFilm
                localStorage.setItem('film', JSON.stringify(newFilm))
            }
        },
        deleteFilm(state, action) {
            state.data.splice(action.payload, 1)
        },
    }
})

export const { addFilm, deleteFilme } = filmReducer.actions;
export default filmReducer.reducer
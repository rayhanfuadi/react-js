import { createSlice } from "@reduxjs/toolkit";

const filmReducer = createSlice({
    name: "film",
    initialState: {
        data: JSON.parse(localStorage.getItem("film")) || [], // Inisialisasi dengan localStorage
    },
    reducers: {
        addFilm(state, action) {
            const newFilmItem = {
                id: action.payload.id,
                tittle: action.payload.title,
                badge: action.payload.badge,
                img: action.payload.img,
            };

            // Cek jika item belum ada di daftar
            if (!state.data.some((e) => e.id === action.payload.id)) {
                const newFilm = [...state.data, newFilmItem];
                state.data = newFilm;
                localStorage.setItem("film", JSON.stringify(newFilm)); // Simpan ke localStorage
            }
        },
        deleteFilm(state, action) {
            const updatedFilm = state.data.filter((_, index) => index !== action.payload);
            state.data = updatedFilm;
            localStorage.setItem("film", JSON.stringify(updatedFilm)); // Update localStorage
        },
    },
});

export const { addFilm, deleteFilm } = filmReducer.actions;
export default filmReducer.reducer;

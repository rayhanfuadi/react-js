// Implementais State Management menggunakn redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const filmReducer = createSlice({
    name: "film",
    initialState: {
        data: JSON.parse(localStorage.getItem("film")) || [],
        successMessage: "",
    },
    reducers: {
        addFilm(state, action) {
            const newFilmItem = {
                id: action.payload.id,
                tittle: action.payload.tittle,
                badge: action.payload.badge,
                img: action.payload.img,
            };

            // Cek jika item belum ada di daftar
            if (!state.data.some((e) => e.id === action.payload.id)) {
                const newFilm = [...state.data, newFilmItem];
                state.data = newFilm;
                // state.data.push(action.payload);
                localStorage.setItem("film", JSON.stringify(newFilm));
                state.successMessage = "Berhasil disimpan ke Daftar Saya!";
            } else {
                state.filmAdded = "Film sudah ada di Daftar Saya!";
                // const message = "Film sudah ada di daftar";
                alert(state.filmAdded);
            }
        },
        clearSuccessMessage: (state) => {
            state.successMessage = ""
        },
        deleteFilm(state, action) {
            const updatedFilm = state.data.filter((item) => item.id !== action.payload.id);
            state.data = updatedFilm;
            localStorage.setItem('film', JSON.stringify(updatedFilm));
        },
    },
});

export const { addFilm, deleteFilm, clearSuccessMessage } = filmReducer.actions;
export default filmReducer.reducer;

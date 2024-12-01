// Mengintegrasikan data API ke dalam tampilan komponen React
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://67455856512ddbd807f79867.mockapi.io/film/2/propertyFilm";


// Fetch data (GET)
export const fetchFilms = createAsyncThunk("films/fetchFilms", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Add new data (POST)
export const addFilm = createAsyncThunk("films/addFilm", async (newFilm, { rejectWithValue }) => {
    try {
        const response = await axios.post(BASE_URL, newFilm);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Update data (PUT)
export const updateFilm = createAsyncThunk("films/updateFilm", async ({ id, updatedFilm }, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, updatedFilm);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Delete data (DELETE)
export const deleteFilm = createAsyncThunk("films/deleteFilm", async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
        return id; // Kembalikan ID yang berhasil dihapus
    } catch (error) {
        return rejectWithValue(error.response?.data || "Gagal menghapus data.");
    }
});

// Slice untuk manajemen state
const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Fetch
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // Add
        builder
            .addCase(addFilm.fulfilled, (state, action) => {
                state.films.push(action.payload);
            })
            .addCase(addFilm.rejected, (state, action) => {
                state.error = action.payload;
            });

        // Update
        builder
            .addCase(updateFilm.fulfilled, (state, action) => {
                const index = state.films.findIndex((film) => film.id === action.payload.id);
                if (index !== -1) {
                    state.films[index] = action.payload;
                }
            })
            .addCase(updateFilm.rejected, (state, action) => {
                state.error = action.payload;
            });

        // Delete
        builder
            .addCase(deleteFilm.fulfilled, (state, action) => {
                state.films = state.films.filter((film) => film.id !== action.payload);
            })
            .addCase(deleteFilm.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const filmsReducer = filmsSlice.reducer;

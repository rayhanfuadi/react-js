// misi FE Advance 2 STEP 4: Integrasi data API ke component React
// api.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const API_URL = "https://674260ebe464749900907218.mockapi.io/film/2/propertyFilm";

// Async Thunks for CRUD operations
export const fetchFilms = createAsyncThunk("film/fetchFilms", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const createFilm = createAsyncThunk("film/createFilm", async (newFilm, { rejectWithValue }) => {
    try {
        const response = await axios.post(API_URL, newFilm);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const updateFilm = createAsyncThunk("film/updateFilm", async (updatedFilm, { rejectWithValue }) => {
    try {
        const response = await axios.put(`${API_URL}/${updatedFilm.id}`, updatedFilm);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteFilm = createAsyncThunk("film/deleteFilm", async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Redux Slice
const filmSlice = createSlice({
    name: "film",
    initialState: {
        films: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Films
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
            })
            // Create Film
            .addCase(createFilm.pending, (state) => {
                state.loading = true;
            })
            .addCase(createFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.films.push(action.payload);
            })
            .addCase(createFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Update Film
            .addCase(updateFilm.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.films = state.films.map((film) =>
                    film.id === action.payload.id ? action.payload : film
                );
            })
            .addCase(updateFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Delete Film
            .addCase(deleteFilm.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.films = state.films.filter((film) => film.id !== action.payload);
            })
            .addCase(deleteFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default filmSlice.reducer;

import axios from "axios";
import { create } from "zustand";

const API_URL = "https://6738d8c54eb22e24fca92cd2.mockapi.io/film/2/propertyFilm";

export const useApiStore = create((set) => ({
    data: [],
    loading: false,
    error: null,
    fetchApi: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(API_URL);
            set({ data: response.data, loading: false });
            console.log(response.data)
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    addData: async (newData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(API_URL, newData);
            set((state) => ({ data: [...state.data, response.data], loading: false }));
            console.log(response.data)
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}))

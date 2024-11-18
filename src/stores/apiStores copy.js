import { create } from 'zustand'
import axios from 'axios'

const mockApiUrl = "https://673ad4be339a4ce44519416d.mockapi.io/users"

export const useUserStore = create((set) => ({
    user: null,
    loginError: null,
    registerError: null,
    successMessage: null,

    login: async (email, password) => {
        try {
            const response = await axios.get(mockApiUrl, {
                params: { email, password },
            });

            if (response.data.length > 0) {
                set({ user: response.data[0], loginError: null });
            } else {
                set({ loginError: 'Email atau password salah!', user: null });
            }
        } catch (error) {
            console.error('Error saat login:', error);
            set({ loginError: 'Terjadi kesalahan saat login.', user: null });
        }
    },

    register: async (username, email, password) => {
        try {
            const response = await axios.post(mockApiUrl, {
                username,
                email,
                password,
            });
            console.log('Data berhasil disimpan:', response.data);
            set({
                user: response.data,
                registerError: null,
                successMessage: 'Akun berhasil didaftarkan!', // Set pesan sukses
            });
        } catch (error) {
            console.error('Error saat register:', error);
            set({
                registerError: 'Gagal mendaftarkan akun!',
                successMessage: null, // Reset pesan sukses jika terjadi error
            });
        }
    },

    logout: () => {
        set({ user: null })
    },

}))

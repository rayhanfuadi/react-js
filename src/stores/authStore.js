import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://673ad4be339a4ce44519416d.mockapi.io/users';

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: !!localStorage.getItem('userId'),
    loading: false,
    error: null,

    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const { data } = await axios.get(API_URL, {
                params: { email, password },
            });

            if (data.length > 0) {
                const user = data[0];
                set({ user, isLoggedIn: true, loading: false });
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('userId', user.id); // Simpan ID user
                return true;
            } else {
                set({ error: 'Invalid email or password', loading: false });
                return false;
            }
        } catch (err) {
            set({ error: err.message, loading: false });
            return false;
        }
    },

    // Register function
    register: async (username, email, password) => {
        set({ loading: true, error: null });

        if (!email.includes('@')) {
            set({ error: 'Invalid email format', loading: false });
            return false;
        }

        try {
            const response = await axios.post(API_URL, { username, email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            });

            console.log("Response data:", response.data);

            set({ user: response.data, isLoggedIn: true, loading: false });
            return true;
        } catch (err) {
            console.error("Error occurred:", err);
            set({ error: err.message, loading: false });
            return false;
        }
    },

    // Update password function
    updatePassword: async (id, newPassword) => {
        try {
            const { data } = await axios.put(`${API_URL}/${id}`, { password: newPassword });
            set((state) => ({ user: { ...state.user, password: data.password } }));
            return true;
        } catch (err) {
            console.error("Error updating password:", err);
            return false;
        }
    },

    // Update username function
    updateUsername: async (id, newUsername) => {
        try {
            const { data } = await axios.put(`${API_URL}/${id}`, { username: newUsername });
            set((state) => ({ user: { ...state.user, username: data.username } }));
            return true;
        } catch (err) {
            console.error("Error updating username:", err);
            return false;
        }
    },

    // Fungsi sinkronisasi user dari API
    syncUser: async (id) => {
        try {
            const { data } = await axios.get(`${API_URL}/${id}`);
            set({ user: data }); // Update data user dari API
        } catch (err) {
            console.error("Error while syncing user data:", err);
        }
    },

    // Logout function
    logout: () => {
        set({ user: null, isLoggedIn: false });
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
    },

    // Delete account function
    deleteAccount: async (id) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`${API_URL}/${id}`);
            set({ user: null, isLoggedIn: false, loading: false });
            return true;
        } catch (err) {
            set({ error: err.message, loading: false });
            return false;
        }
    },

    // Function for checking if user is logged in
    checkSession: () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            set({ user, isLoggedIn: true });
            // Sinkronkan data pengguna dari API
            useAuthStore.getState().syncUser(user.id);
        } else {
            set({ user: null, isLoggedIn: false });
        }
    },

}));

export default useAuthStore;

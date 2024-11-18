import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'https://673ad4be339a4ce44519416d.mockapi.io/users';

// Setup Axios interceptors untuk debugging
axios.interceptors.request.use(request => {
    console.log('Request:', request);
    return request;
}, error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
}, error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
});

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: !!localStorage.getItem('userId'),
    loading: false,
    error: null,

    // Login function
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
        set({ loading: true, error: null });
        try {
            const { data } = await axios.put(`${API_URL}/${id}`, { password: newPassword });
            set((state) => ({ user: { ...state.user, password: data.password }, loading: false }));
            return true;
        } catch (err) {
            set({ error: err.message, loading: false });
            return false;
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
        } else {
            set({ user: null, isLoggedIn: false });
        }
    },


}));

export default useAuthStore;

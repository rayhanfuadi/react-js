// src/api/authApi.js
import axios from 'axios';
import useAuthStore from '../store/authStore';

const API_URL = 'https://673ad4be339a4ce44519416d.mockapi.io/users';

// Mengambil data user berdasarkan email dan password
export const loginUser = async (email, password) => {
    try {
        const response = await axios.get(API_URL, {
            params: { email, password },
        });
        if (response.data.length > 0) {
            const user = response.data[0];
            useAuthStore.getState().setUser(user);
            useAuthStore.getState().setToken('fake-token'); // Anda bisa mengganti ini dengan token asli jika diperlukan
            return { success: true, user };
        } else {
            return { success: false, message: 'Invalid credentials' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Error occurred during login' };
    }
};

// Register user baru
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        useAuthStore.getState().setUser(response.data);
        useAuthStore.getState().setToken('fake-token'); // Anda bisa mengganti ini dengan token asli jika diperlukan
        return { success: true, user: response.data };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: 'Error occurred during registration' };
    }
};

// Ubah password
export const changePassword = async (userId, newPassword) => {
    try {
        const response = await axios.put(`${API_URL}/${userId}`, {
            password: newPassword,
        });
        return { success: true, message: 'Password changed successfully' };
    } catch (error) {
        console.error('Change password error:', error);
        return { success: false, message: 'Error occurred during password change' };
    }
};

// Logout
export const logoutUser = () => {
    useAuthStore.getState().clearAuth();
};

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

// Middleware untuk memeriksa token
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Cek apakah header Authorization ada
    if (!authHeader) {
        return res.status(401).send({ message: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1]; // Format: "Bearer <token>"

    // Cek apakah token ada
    if (!token) {
        return res.status(401).send({ message: 'Token is missing' });
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Simpan informasi user dari token
        next(); // Lanjutkan ke endpoint berikutnya
    } catch (err) {
        return res.status(403).send({ message: 'Invalid or expired token' });
    }
};

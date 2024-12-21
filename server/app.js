/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express'
import {
    getFilms, getFilmSeries, addFilm, deleteFilm, updateFilm,
    getGenre, getGenreId, updateGenre, deleteGenre, addGenre,
    getUsers, getUsersId, updateUsers, addUsers, deleteUsers,
    getMovie, getMovieId, addMovie, updateMovie, deleteMovie
} from './database.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import multer from "multer"
import path from 'path'
import { authMiddleware } from './auth.js'
import { pool } from './database.js'
import { v4 as uuidv4 } from 'uuid'
import { upload } from './uploadService.js'

dotenv.config()
const app = express()
app.use(express.json())

// Register
app.post('/auth/register', async (req, res) => {
    try {
        const { fullname, username, email, password, avatar } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate unique verification token
        const verificationToken = uuidv4();

        // Simpan data user ke database
        const user = await addUsers(fullname, username, email, hashedPassword, avatar);

        // Update token ke user
        await pool.query('UPDATE users SET token = ? WHERE id_user = ?', [verificationToken, user[0].id_user]);

        // Kirim email verifikasi
        await sendVerificationEmail(email, verificationToken);

        res.status(201).send({ message: 'User registered successfully. Please check your email for verification.' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Registration failed', error: err.message });
    }
});

// Login
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = (await getUsers()).find((u) => u.email === email);
    if (!user) return res.status(404).send({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token, user });
});

// Endpoint yang dilindungi
app.get('/protected', authMiddleware, async (req, res) => {
    res.send({ message: 'This is a protected route', user: req.user });
});


// get users
app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

// get user by id
app.get('/users/:id_user', async (req, res) => {
    const id = req.params.id_user
    const user = await getUsersId(id)
    res.send(user)
})

// update user
app.patch('/users/:id_user', async (req, res) => {
    const id = req.params.id_user
    const { fullname, username, email, password } = req.body
    const user = await updateUsers(id, fullname, username, email, password)
    res.send(user)
})

// add userss
app.post('/users', async (req, res) => {
    const { fullname, username, email, password, avatar } = req.body
    const user = await addUsers(fullname, username, email, password, avatar)
    res.status(201).send(user)
})

// delete users
app.delete('/users/:id_user', async (req, res) => {
    const id = req.params.id_user
    const user = await deleteUsers(id)
    res.send(user)
})

// =================================
app.get('/series_film', authMiddleware, async (req, res) => {
    try {
        const { filter, sort, search } = req.query;
        console.log('Query Params:', req.query);
        // Base query
        let query = "SELECT * FROM series_film";
        const queryParams = [];
        // Filtering
        if (filter) {
            query += " WHERE badge = ?";
            queryParams.push(filter);
        }
        // Searching
        if (search) {
            if (filter) {
                query += " AND"; // Jika ada filter sebelumnya, gunakan AND
            } else {
                query += " WHERE"; // Jika tidak ada filter sebelumnya, gunakan WHERE
            }
            query += " tittle LIKE ?";
            queryParams.push(`%${search}%`);
        }
        // Sorting
        if (sort) {
            query += ` ORDER BY ${sort}`;
        }
        console.log('Final Query:', query);
        console.log('Query Parameters:', queryParams);
        // Execute query
        const [rows] = await pool.query(query, queryParams);
        res.send(rows);
    } catch (err) {
        console.error('Error Detail:', err);
        res.status(500).send({ message: 'Server Error', error: err.message });
    }
});

// getFilm
app.get("/series_film", async (req, res) => {
    const films = await getFilms()
    res.send(films)
})

// getFilmById
app.get("/series_film/:id_series_film", async (req, res) => {
    const id = req.params.id_series_film
    const filmSeries = await getFilmSeries(id)
    res.send(filmSeries)
})

// addFilm
app.post("/series_film", async (req, res) => {
    const { tittle, img, rating, total_episode, badge, sinopsis, tahun_rilis, id_genre } = req.body
    const film = await addFilm(tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre)
    res.status(201).send(film)
})

// updateFilm
app.patch("/series_film/:id_series_film", async (req, res) => {
    const id = req.params.id_series_film
    const { tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre } = req.body
    const film = await updateFilm(id, tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre)
    res.status(200).send(film)
})

// deleteFilm
app.delete("/series_film/:id_series_film", async (req, res) => {
    const id = req.params.id_series_film
    await deleteFilm(id)
    res.status(204).send()
})

// ===============================
// getMovie
app.get('/movie', async (req, res) => {
    const movie = await getMovie()
    res.send(movie)
})

// getMovieByID
app.get('/movie/:id_episode_movie', async (req, res) => {
    const id = req.params.id_episode_movie
    const movie = await getMovieId(id)
    res.send(movie)
})

// addMovie
app.post('/movie', async (req, res) => {
    const { tittle, img, badge, rating, sinopsis, id_series_film } = req.body
    const movie = await addMovie(tittle, img, badge, rating, sinopsis, id_series_film)
    res.status(201).send(movie)
})

// updateMovie
app.patch('/movie/:id_episode_movie', async (req, res) => {
    const id = req.params.id_episode_movie
    const { tittle, img, badge, rating, sinopsis, id_series_film } = req.body
    const movie = await updateMovie(id, tittle, img, badge, rating, sinopsis, id_series_film)
    res.status(200).send(movie)
})

// deleteMovie
app.delete('/movie/:id_episode_movie', async (req, res) => {
    const id = req.params.id_episode_movie
    await deleteMovie(id)
    res.status(204).send()
})

// ============================
// getgenre
app.get("/genre", async (req, res) => {
    const genre = await getGenre()
    res.send(genre)
})

// getFilmById
app.get("/genre/:id_genre", async (req, res) => {
    const id = req.params.id_genre
    const nama_genre = await getGenreId(id)
    res.send(nama_genre)
})

// addFilm
app.post("/genre", async (req, res) => {
    const { nama_genre } = req.body
    const genre = await addGenre(nama_genre)
    res.status(201).send(genre)
})

// updateGenre
app.patch("/genre/:id_genre", async (req, res) => {
    const id = req.params.id_genre
    const { nama_genre } = req.body
    const genre = await updateGenre(id, nama_genre)
    res.status(200).send(genre)
})

// deleteGenre
app.delete("/genre/:id_genre", async (req, res) => {
    const id = req.params.id_genre
    await deleteGenre(id)
    res.status(204).send()
})

// Send Email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendVerificationEmail = async (email, token) => {
    const verificationLink = `${process.env.BASE_URL}/verifikasi-email?token=${token}`;
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Verify Your Email - Chill Movie',
        text: `Click the link below to verify your email:\n\n${verificationLink}`,
    };

    await transporter.sendMail(mailOptions);
};

app.get('/verifikasi-email', async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).send({ message: 'Verification token is required' });
        }

        // Cek apakah token ada di database
        const [rows] = await pool.query('SELECT * FROM users WHERE token = ?', [token]);
        if (rows.length === 0) {
            return res.status(400).send({ message: 'Invalid Verification Token' });
        }

        // Hapus token setelah verifikasi berhasil
        // await pool.query('UPDATE users SET token = NULL WHERE token = ?', [token]);

        res.send({ message: 'Email Verified Successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Verification failed', error: err.message });
    }
});


// upload image
app.post('/upload', upload.single('image'), (req, res) => {
    try {
        // Jika upload berhasil
        res.status(201).send({
            message: 'File uploaded successfully',
            file: {
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
            },
        });
    } catch (err) {
        // Jika terjadi error
        res.status(400).send({
            message: 'File upload failed',
            error: err.message,
        });
    }
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// start server
app.listen(8080, () => {
    console.log('server is running on port 8080')
})
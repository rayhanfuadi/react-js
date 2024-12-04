/* eslint-disable no-undef */
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// get tabel series_film
export const getFilms = async () => {
    const [rows] = await pool.query("SELECT * FROM series_film")
    return rows
}

// get tabel series_film by id
export const getFilmSeries = async (id) => {
    const [rows] = await pool.query(`
        SELECT *
        FROM series_film
        WHERE id_series_film = ?
        `, [id])

    return rows
}
// add film to series_film
// Jika valid, lakukan pembaruan
export const addFilm = async (tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre) => {
    const [result] = await pool.query(`
        INSERT INTO series_film (tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre])
    const id = result.insertId
    return getFilmSeries(id)
}

// update film on series_film
export const updateFilm = async (id, tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre) => {
    const [rows] = await pool.query(`
        UPDATE series_film
        SET tittle = ?, img = ?, badge = ?, rating = ?, total_episode = ?, sinopsis = ?, tahun_rilis = ?, id_genre = ?
        WHERE id_series_film = ?
    `, [tittle, img, badge, rating, total_episode, sinopsis, tahun_rilis, id_genre, id]);
    return rows;
};

// delete film from series_film by id
export const deleteFilm = async (id) => {
    const [rows] = await pool.query("DELETE FROM series_film WHERE id_series_film = ?", [id])
    return rows
}

// =========
// get tabel genre
export const getGenre = async () => {
    const [rows] = await pool.query("SELECT * FROM genre")
    return rows
}

// get tabel genre by id
export const getGenreId = async (id) => {
    const [rows] = await pool.query(`
        SELECT *
        FROM genre
        WHERE id_genre = ?
        `, [id])

    return rows
}
// add film to genre
export const addGenre = async (nama_genre) => {
    const [result] = await pool.query(`
        INSERT INTO genre (nama_genre)
        VALUES (?)`, [nama_genre])
    const id = result.insertId
    return getGenreId(id)
}

// update film on genre
export const updateGenre = async (id, nama_genre) => {
    const [rows] = await pool.query(`
        UPDATE genre
        SET nama_genre = ?
        WHERE id_genre = ?
        `, [nama_genre, id])
    return rows
}

// delete film from genre by id
export const deleteGenre = async (id) => {
    const [rows] = await pool.query("DELETE FROM genre WHERE id_genre = ?", [id])
    return rows
}



// const shows = await getFilms()
// const films = await addFilm('Guardian Of Galaxy vol III', 'img/film/t3.png', 'BadgeMerah', 'sinopsis 3', 2023)
// console.log(shows)

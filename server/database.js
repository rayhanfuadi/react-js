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

export const getFilms = async () => {
    const [rows] = await pool.query("SELECT * FROM series_film")
    return rows
}

export const getFilmSeries = async (id) => {
    const [rows] = await pool.query(`
        SELECT *
        FROM series_film
        WHERE id_series_film = ?
        `, [id])

    return rows
}

export const addFilm = async (tittle, img, badge, sinopsis, tahun_rilis) => {
    const [result] = await pool.query(`
        INSERT INTO series_film (tittle, img, badge, sinopsis, tahun_rilis)
        VALUES (?, ?, ?, ?, ?)`, [tittle, img, badge, sinopsis, tahun_rilis])
    const id = result.insertId
    return getFilmSeries(id)
}

export const updateFilm = async (id, tittle, img, badge, sinopsis, tahun_rilis) => {
    const [rows] = await pool.query(`
        UPDATE series_film
        SET tittle = ?, img = ?, badge = ?, sinopsis = ?, tahun_rilis = ?
        WHERE id_series_film = ?
        `, [tittle, img, badge, sinopsis, tahun_rilis, id])
    return rows
}

export const deleteFilm = async (id) => {
    const [rows] = await pool.query("DELETE FROM series_film WHERE id_series_film = ?", [id])
    return rows
}

const shows = await getFilms()
// const films = await addFilm('Guardian Of Galaxy vol III', 'img/film/t3.png', 'BadgeMerah', 'sinopsis 3', 2023)
console.log(shows)

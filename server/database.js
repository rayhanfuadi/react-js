/* eslint-disable no-undef */
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export const getUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

export const getUsersId = async (id) => {
    const [rows] = await pool.query(`
        SELECT *
        FROM users
        WHERE id_user = ?`, [id])
    return rows
}

export const addUsers = async (fullname, username, email, password, avatar) => {
    const [result] = await pool.query(`
        INSERT INTO users (fullname, username, email, password, avatar) 
        VALUES (?, ?, ?, ?, ?)`, [fullname, username, email, password, avatar])
    const id = result.insertId;
    return getUsersId(id)
}

export const updateUsers = async (id, fullname, username, email, password) => {
    const [rows] = await pool.query(`
        UPDATE users 
        SET id_user = ?, fullname = ?, username = ?, email = ?, password = ?
        WHERE id_user = ?`, [id, fullname, username, email, password, id])
    return rows;
}

export const deleteUsers = async (id) => {
    const [rows] = await pool.query("DELETE FROM users WHERE id_user = ?", [id])
    return rows
}

// ==================
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

// =================================
// get Movie
export const getMovie = async () => {
    const [rows] = await pool.query("select * from episode_movie")
    return rows
}

// get Movie by id
export const getMovieId = async (id) => {
    const [rows] = await pool.query(`
        select *
        from episode_movie
        where id_episode_movie = ?`, [id])
    return rows
}

// add Movie
export const addMovie = async (tittle, img, badge, rating, sinopsis, id_series_film) => {
    const [result] = await pool.query(`
        insert into episode_movie (tittle, img, badge, rating, sinopsis, id_series_film)
        values (?, ?, ?, ?, ?, ?)`, [tittle, img, badge, rating, sinopsis, id_series_film])
    const id = result.insertId
    return getMovieId(id)
}

// update Movie
export const updateMovie = async (id, tittle, img, badge, rating, sinopsis, id_series_film) => {
    const [rows] = await pool.query(`
        update episode_movie
        set tittle = ?, img = ?, badge = ?, rating = ?, sinopsis = ?, id_series_film = ?
        where id_episode_movie = ?`, [tittle, img, badge, rating, sinopsis, id_series_film, id])
    return rows
}

// delete Movie
export const deleteMovie = async (id) => {
    const [rows] = await pool.query("delete from episode_movie where id_episode_movie = ?", [id])
    return rows
}

// ================================
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
        INSERT INTO genre(nama_genre)
        VALUES(?)`, [nama_genre])
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
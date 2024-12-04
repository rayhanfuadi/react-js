/* eslint-disable no-unused-vars */
import express from 'express'
import { getFilms, getFilmSeries, addFilm, deleteFilm, updateFilm, getGenre, getGenreId, updateGenre, deleteGenre, addGenre } from './database.js'

const app = express()
app.use(express.json())

// getFIlm
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

// app.delete("/series_film/:id_series_film", async (req, res) => {
//     const id = req.params.id_series_film
//     await deleteFilm(id)
//     res.status(204).send()
// })



// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// start server
app.listen(8080, () => {
    console.log('server is running on port 8080')
})
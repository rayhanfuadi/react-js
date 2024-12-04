/* eslint-disable no-unused-vars */
import express from 'express'
import { getFilms, getFilmSeries, addFilm, deleteFilm, updateFilm } from './database.js'

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
    const { tittle, img, badge, sinopsis, tahun_rilis } = req.body
    const film = await addFilm(tittle, img, badge, sinopsis, tahun_rilis)
    res.status(201).send(film)
})

// updateFilm
app.patch("/series_film/:id_series_film", async (req, res) => {
    const id = req.params.id_series_film
    const { tittle, img, badge, sinopsis, tahun_rilis } = req.body
    const film = await updateFilm(id, tittle, img, badge, sinopsis, tahun_rilis)
    res.status(200).send(film)
})

// deleteFilm
app.delete("/series_film/:id_series_film", async (req, res) => {
    const id = req.params.id_series_film
    await deleteFilm(id)
    res.status(204).send()
})

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// start server
app.listen(8080, () => {
    console.log('server is running on port 8080')
})
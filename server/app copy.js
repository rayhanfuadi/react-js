/* eslint-disable no-unused-vars */
import express from 'express'
import {
    getFilms, getFilmSeries, addFilm, deleteFilm, updateFilm, getGenre, getGenreId, updateGenre, deleteGenre, addGenre, getUsers, getUsersId,
    updateUsers, addUsers, deleteUsers
} from './database.js'

const app = express()
app.use(express.json())

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

// add users
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
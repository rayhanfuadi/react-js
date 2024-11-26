import axios from "axios";

export const getFilmTranding = (callback) => {
    axios.get("https://674260ebe464749900907218.mockapi.io/film/3/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}

// untuk menampilkan detail dalam product
// export const getFilmById = (id, callback) => {
//     axios.get(`https://6738d8c54eb22e24fca92cd2.mockapi.io/film/${id}/propertyFilm`)
//         .then((res) => {
//             callback(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
import axios from "axios";

export const getTopRating = (callback) => {
    axios.get("https://674260ebe464749900907218.mockapi.io/film/2/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
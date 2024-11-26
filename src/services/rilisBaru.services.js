import axios from "axios";

export const getRilisBaru = (callback) => {
    axios.get("https://674260ebe464749900907218.mockapi.io/film/4/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
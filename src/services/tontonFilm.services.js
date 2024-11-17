import axios from "axios";

export const getTontonFilm = (callback) => {
    axios.get("https://6738d8c54eb22e24fca92cd2.mockapi.io/film/1/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
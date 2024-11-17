import axios from "axios";

export const getRilisBaru = (callback) => {
    axios.get("https://6738d8c54eb22e24fca92cd2.mockapi.io/film/4/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
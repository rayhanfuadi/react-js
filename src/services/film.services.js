import axios from "axios";

export const getFilm = (callback) => {
    axios
        .get("https://6738d8c54eb22e24fca92cd2.mockapi.io/film")
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        })
}
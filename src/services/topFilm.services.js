import axios from "axios";

export const getTopRating = (callback) => {
    axios.get("https://67455856512ddbd807f79867.mockapi.io/film/2/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
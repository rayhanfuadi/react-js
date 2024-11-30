import axios from "axios";

export const getRilisBaru = (callback) => {
    axios.get("https://67455856512ddbd807f79867.mockapi.io/film/4/propertyFilm").then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
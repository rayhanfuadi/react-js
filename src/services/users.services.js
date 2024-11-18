import axios from "axios";

export const getUsers = (callback) => {
    axios.get("https://673ad4be339a4ce44519416d.mockapi.io/users").then((res) => {
        console.log(res.data)
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}


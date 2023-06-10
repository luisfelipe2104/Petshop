import axios from "axios"

const api = axios.create({
    baseURL: "https://petshop-back.onrender.com"
})

export default api
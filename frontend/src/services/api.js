import axios from "axios"

// https://petshop-back.onrender.com
// http://localhost:8000

const api = axios.create({
    baseURL: "https://petshop-back.onrender.com"
})

export default api
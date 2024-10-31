import axios from "axios"

const HOST=import.meta.env.VITE_SERVER_URL

const apiClient=axios.create({
    baseURL:HOST,
})

export default apiClient
import axios from "axios"

// Puedes configurar una instancia de axios aqui

const config = {
    baseURL: '', // Aca puedes adaptar tu url de base para hacer peticiones HTTP
    headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${localStorage.getItem("userToken")}` //where applicable
    }
}

const axiosAnonInstance = axios.create(config)
export default axiosAnonInstance
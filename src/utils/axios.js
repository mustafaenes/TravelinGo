import axios from "axios";

//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL  //DÜZENLEMESİ GEREKİYOR.

const instance = axios.create({
    baseURL: 'https://localhost:5001/api/Travelingo',
});

export default instance;
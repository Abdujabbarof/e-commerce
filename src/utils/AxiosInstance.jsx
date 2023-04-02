import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://3.138.204.20/',
    timeout: 10000
})
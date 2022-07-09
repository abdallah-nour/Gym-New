import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://gymnewapp.herokuapp.com/'
});
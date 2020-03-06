import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Authorization'] = 'AUTHORIZATION OF AXIOSINSTANCE TOKEN';

export default instanceAxios;
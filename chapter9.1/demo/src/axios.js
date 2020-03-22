import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instanceAxios;
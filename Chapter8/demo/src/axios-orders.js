import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b3a67.firebaseio.com/'
})

export default instance;
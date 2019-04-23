import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://nitesh-portfolio-f527b.firebaseio.com/'
});

export default instance;
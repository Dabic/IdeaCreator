import axios from 'axios';

const myInstance = axios.create({
    baseURL: 'https://dex-g01-p2.firebaseio.com/'
});

export default myInstance;

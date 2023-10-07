import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.anilibria.tv/v3/'
});

export default instance;

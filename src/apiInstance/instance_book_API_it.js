import axios from 'axios';

const Instance_API = axios.create(
    { 
        baseURL : 'https://api.itbook.store/1.0/search/mongodb',
    }
)

export default Instance_API;

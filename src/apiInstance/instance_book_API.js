import axios from 'axios';

const Instance_API = axios.create(
    { 
        baseURL : 'https://mernblogdemo.herokuapp.com/Api/',
    }
)

export default Instance_API;

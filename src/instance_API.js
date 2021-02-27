import axios from 'axios';

const Instance = axios.create(
    { 
        baseURL : 'https://mernblogdemo.herokuapp.com/Api/',
    }
)

export default Instance;

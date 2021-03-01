  
import axios from 'axios';

const Instance_Newsapi_API = axios.create(
    { 
        baseURL : 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=02a02f70a5ba4d0f8a5faba69b554c2e',
    }
)

export default Instance_Newsapi_API;

  
import axios from 'axios';

const Instance_Newsapi_API = axios.create(
    { 
        baseURL : 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=947rE1r1XJk0TYG0wwGlubhReDHiPvb8',
    }
)

export default Instance_Newsapi_API;

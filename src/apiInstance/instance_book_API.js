import axios from 'axios';

const Instance_API = axios.create(
    { 
        baseURL : 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=947rE1r1XJk0TYG0wwGlubhReDHiPvb8',
    }
)

export default Instance_API;

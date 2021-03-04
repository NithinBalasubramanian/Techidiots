import axios from 'axios';

const Instance_Newsapi_gnews_API = axios.create(
    { 
        baseURL : 'https://gnews.io/api/v4/top-headlines?lang=en&token=9f8cd16e6ad80b74e7b771a5de4be9bd',
    }
)

export default Instance_Newsapi_gnews_API;

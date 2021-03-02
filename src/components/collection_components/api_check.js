import axios from "axios";


const ApiTest = () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-key': '3362722dd0msh014605fac24e36bp1251bcjsnf6916b501ed2',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  
  
  return(
    <div>
      <h1>Api</h1>
    </div>
  );
  
}

export default ApiTest;

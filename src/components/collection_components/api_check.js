import axios from "axios";


const ApiTest = () => {
const options = {
  method: 'POST',
  url: 'https://guardianmikilior1v1.p.rapidapi.com/getTags',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': '3362722dd0msh014605fac24e36bp1251bcjsnf6916b501ed2',
    'x-rapidapi-host': 'Guardianmikilior1V1.p.rapidapi.com'
  },
  data: {apiKey: '<REQUIRED>'}
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

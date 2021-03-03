import axios from "axios";


const ApiTest = () => {

axios.get("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=02a02f70a5ba4d0f8a5faba69b554c2e").then(function (response) {
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

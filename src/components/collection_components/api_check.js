import axios from "axios";


const ApiTest = () => {

axios.get("https://gnews.io/api/v4/top-headlines?&token=9f8cd16e6ad80b74e7b771a5de4be9bd").then(function (response) {
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

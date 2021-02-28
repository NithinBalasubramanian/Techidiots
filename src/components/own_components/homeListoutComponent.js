import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_API';

const HomeListoutComponent = () => {
  
  let [ Listdata , setListdata ] = useState([]);

  let [ FetchStatus , setFetchStatus ] = useState(true);

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () =>{
        axios.get('/homeFetch')
        .then((res) => {
            setListdata(res.data);
            setFetchStatus(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
  return(
    <>
       <div className={(FetchStatus) ? "preLoader" : "preNone" } >
        <div class="wrap">
            <div class="loading">
                <div class="bounceball"></div>
                <div class="text">Fetching</div>
            </div>
        </div>
    </div>
    <div className="homeListContainer">
      <div className="row">
                  { Listdata.map((itm,k) => {
                  let link = "https://mernblogdemo.herokuapp.com/Blog/";
                  let ref = itm.url;
                  let refUrl = link.concat(ref);
                if(k === 0 || k === 1 || k === 8 || k === 9 || k === 19 || k=== 20){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                            <a href={refUrl}>
                                <img src={itm.imgUrl} alt="img" width="100%" height="300px" /> 
                                <h4>{itm.title}</h4>
                                <div className="byAuth">
                                    - by {itm.auther} 
                                </div>
                            </a>
                        </div>                        
                    </div>
                    )
                }
                return(
                    <div className="col-md-4 card_col">
                        <div className="card_home">
                            <a href={refUrl}>
                                <img src={itm.imgUrl} alt="img" width="100%" height="250px" /> 
                                <h4>{itm.title}</h4>
                                <div className="byAuth">
                                    - by {itm.auther} 
                                </div>
                            </a>
                        </div>
                    </div>
                    )
                })
            }
       </div>
    </div>
    </>
  );
}

export default HomeListoutComponent;

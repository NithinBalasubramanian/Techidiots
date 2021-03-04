import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/Instance_article_API/Instance_Newsapi_gnews_API';

const GnewsArticle = () => {
  let [ Listdata , setListdata ] = useState([]);
    
  let [ FetchStatus , setFetchStatus ] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

    const fetchAll = () =>{
        axios.get('')
        .then((res) => {
            setListdata(res.data.response.docs);
          console.log(res.data.response.docs);
            setFetchStatus(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    return(
        <>
        <div className={(FetchStatus) ? "preLoader" : "preNone" } >
            <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">Fetching</div>
                </div>
            </div>
        </div>
        <div className="homeListContainer">
                <h1>Latest Collections </h1><small></small>
                <div className="row">
                  { Listdata.map((itm,k) => {
                    return(
                       <div className="col-md-4 bookCard" >
                        <a href={itm.web_url} target="_blank">
                            <div className="bookDisplay" key={k}>
                                <img src={refUrl} alt="Book" width="100%" height="300px" />
                                <h4>{itm.headline.main }</h4>
                                <div class="row publish">
                                    <div class="col-md-12">
                                        <small>Source </small>
                                        <small>: {itm.source}</small>
                                    </div>
                                </div>
                                <div className="bookDesc">
                                    {itm.abstract}
                                </div>
                            </div>
                        </a>
                        </div>
                   )
                  }) }
                </div>
        </div>
        </>
    );
}


export default GnewsArticle
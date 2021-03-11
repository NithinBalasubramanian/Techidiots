import React , { useState , useEffect } from 'react';
import '../../App.scss';
import GnewsArticle from './gnewsArticle';
import axios from '../../apiInstance/Instance_article_API/Instance_Newsapi_API';

const ArticleStore = () => {
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
        <GnewsArticle />
        </>
    );
}


export default ArticleStore

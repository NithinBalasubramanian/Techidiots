import React , { useState , useEffect } from 'react';
// import { useParams } from 'react-router';
import axios from '../../apiInstance/instance_API';

const BlogView = () => {

// let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);
    
     let [ FetchStatus , setFetchStatus ] = useState(true);
    
    const Fetchdata = () => {
//         axios.get('/view/'+url)
//         .then( res => {
//             setDatas(res.data);
//             setFetchStatus(false);
//         })
//         .catch( err => {
//             console.log(err);
//         })
    }
    
    const getDate = (date) => {
     return date.split(' ',1)
    }

    const FetchdataNot = () => {
//         axios.get('/recent/'+url)
//         .then( res => {
//             setRecent(res.data);
//         })
//         .catch( err => {
//             console.log(err);
//         })
    }

    useEffect(()=>{
        Fetchdata();
        FetchdataNot();
    }, []) //place url in square bracket
    
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
      <div className="blog_container">
            <div className="blogContent">
                
            </div>
        </div>
    </>
}

export default BlogView

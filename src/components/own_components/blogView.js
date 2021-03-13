import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from '../../apiInstance/instance_API';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogView = () => {

    let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);
    
     let [ FetchStatus , setFetchStatus ] = useState(true);
    
    const Fetchdata = () => {
        axios.get('/view/'+url)
        .then( res => {
            setDatas(res.data);
            setFetchStatus(false);
        })
        .catch( err => {
            console.log(err);
        })
    }
    
    const getDate = (date) => {
     return date.split(' ',1)
    }

    const FetchdataNot = () => {
        axios.get('/recent/'+url)
        .then( res => {
            setRecent(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        setFetchStatus(true);
        Fetchdata();
        FetchdataNot();
    }, [url]) 
    
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
            <div className="blogContent">
                { datas.map((itm,k) => { 
                    document.title=itm.title;
                    return(
                        <>
                        <div className="col-md-12">
                            <h1>{itm.title}</h1>
                        </div>
                        <div className="col-md-8">
                            <div className="preheading">
                                <p style={ {padding:'10px 0px',margin:'0px'} }>{itm.preheading}</p>
                            </div>
                            <div className="byAuth">
                                - From {itm.auther} 
                            <small>{ moment(itm.createdOn).fromNow() }</small>
                            </div>
                            {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                            <img src={itm.imgUrl} alt={ itm.title } width="100%" height="auto" /> 
                            
                             <div className="contentDisp">
                                <p className="paraMainCont">{itm.blog}</p>
                                   { (itm.subPara) ? 
                                       itm.subPara.map((sub_itm,s_k) => {
                                       return (
                                           <p  className="paraSubCont" key={s_k} >{sub_itm.Content}</p>
                                       ) 
                                    })
                                   : null }
                            </div>
                          </div>
                       </>
                    )
                }) }
                <div className="col-md-4 row recent">
                    <div class="recent_part">
                        {recent.map((itm,k) => {
                            return (
                                <div className="card_recent ">
                                    <Link to={ `/Blog/${itm.url}` }  >
                                        <img src={itm.imgUrl} width="100%" height="150px" alt=""></img>
                                        <h5>{itm.title}</h5>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default BlogView

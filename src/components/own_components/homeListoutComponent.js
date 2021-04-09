import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_API';
import { Link } from 'react-router-dom';
import moment from 'moment';
import  { Helmet } from 'react-helmet';

const HomeListoutComponent = () => {
  
  let [ Listdata , setListdata ] = useState([]);
  
  let [ ListInfo , setListInfo ] = useState([]);

  let [ ListNews , setListNews ] = useState([]);
  
  let [ ListTopdata , setListTopdata ] = useState([]);

  let [ FetchStatus , setFetchStatus ] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchAbove();
      
      const timer = setTimeout(() => {
         fetchMid();
        }, 3000);
      const timer1 = setTimeout(() => {
         fetchAll();
        }, 5000);
      return () => clearTimeout(timer);
      
    }, [])
  
    const fetchAbove = () => {
        axios.get('/homeTopFetch')
      .then((res) => {
            setListTopdata(res.data);
            setFetchStatus(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    const fetchMid = () => {
       axios.get('/blogFetchHome/techInfo')
      .then((res) => {
            setListInfo(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        axios.get('/blogFetchHome/techNews')
      .then((res) => {
            setListNews(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const fetchAll = () =>{
        axios.get('/homeFetch')
        .then((res) => {
            setListdata(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let onUrl = window.location.href;
    
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
    <Helmet>
        <title>TechIdiots - The Collections of Tech for Techies</title>
        <meta name="description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>
        <link rel="canonical" href={ onUrl } />

        <meta property="og:image" content="https://techidiots.in/favicon.jpg"/>
        <meta property="og:url" content="https://techidiots.in"/>
        <meta property="og:site_name" content="www.techidiots.in"/>
        <meta property="og:type" content="website">
        <meta property="og:title" content="TechIdiots - The Collections of Tech for Techies"/>
        <meta property="og:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>

        <meta property="twitter:url" content="https://techidiots.in/" />
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:image" content="https://techidiots.in/favicon.jpg">
        <meta property="twitter:title" content="TechIdiots - The Collections of Tech for Techies" />
        <meta property="twitter:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you." />
    </Helmet>
    <div className="homeListContainer">
      <div className="row">
         <div className="col-md-8">
         { ListTopdata.map((itm,k) => {
                if(k === 0 || k === 1  ){
                    return(
                         <div className="card_top_home">
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <div className="category">{ itm.category }</div>
                                <h4>{ itm.title }</h4>
                                <div className="byAuth">
                                    - by {itm.auther}
                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                </div>
                                <img src={itm.imgUrl} alt={ itm.title } width="100%"  /> 
                                <p>{ itm.preheading } </p>
                            </Link>
                        </div>    
                  )
                }
              })
             }
          </div>
        <div className="col-md-4">
           { ListTopdata.map((itm,k) => {
                if(k > 1 && k < 5 ){
                    return(
                         <div className="card_top_sub_home">
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <p className="category">{ itm.category }</p>
                                <h4>{ itm.title }</h4>
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{ moment(itm.createdOn).fromNow() }</small>
                                </div>
                                <img src={itm.imgUrl} alt={ itm.title } width="100%"  /> 
                            </Link>
                        </div>    
                    )
                 }
               })
             }
         </div>
         <div className="col-md-12 midAbout">
            <p>About TechIdiots</p>
            <h1><span>TechIdiots </span>is developed to give YOU a platform to <span>VIEW</span> and <span>GAIN</span> more information on latest <span>TECH</span> Based NEWS and information all in one . This <span>REFERS</span> information from many<span>TRUSTABLE</span>  resources and <span>PRESENT</span> before YOU .... </h1>
          </div>
      </div>
      <div className="row">
         <div className="col-md-6">
             <h4 className="listHeading"><u>LATEST TECH ARTICLES</u></h4>
            { ListInfo.map((itm,k) => {
             return(
               <Link to={`/Blog/${itm.category}/${itm.url}`} exact  className="articleViewHome">
                <div className="articleImage">
                  <img src={itm.imgUrl} alt={ itm.title } width="100%" height="100%"  /> 
                </div>
                <div className="articleCont">
                  <small>{ moment(itm.createdOn).fromNow() }</small>
                  <h4>{ itm.title }</h4>
                </div>
             </Link>
             )
            })
           }
          </div>
         <div className="col-md-6">
         <h4 className="listHeading"><u>LATEST TECH NEWS </u></h4>
            { ListNews.map((itm,k) => {
             return(
               <Link to={`/Blog/${itm.category}/${itm.url}`} exact  className="articleViewHome">
                <div className="articleImage">
                  <img src={itm.imgUrl} alt={ itm.title } width="100%" height="100%"  /> 
                </div>
                <div className="articleCont">
                  <small>{ moment(itm.createdOn).fromNow() }</small>
                  <h4>{ itm.title }</h4>
                </div>
             </Link>
             )
            })
           }
          </div>
       </div>
      <h4 className="listHeading"><u>TECH COLLECTIONS</u></h4>
      <div className="row">
                  { Listdata.map((itm,k) => {
                if(k === 0 || k === 1 || k === 5 || k === 6 ){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                                <div className="category">
                                    { itm.category }
                                </div>
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="300px" /> 
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{ moment(itm.createdOn).fromNow() }</small>
                                </div>
                                <h4>{ itm.title }</h4>
                                <p>{ itm.preheading } </p>
                            </Link>
                        </div>                        
                    </div>
                    )
                }
                return(
                    <div className="col-md-4 card_col">
                        <div className="card_home">
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <div className="category">
                                    { itm.category }
                                </div>
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="250px" /> 
                                <div className="byAuth">
                                - by {itm.auther} 
                                    <small>{ moment(itm.createdOn).fromNow() }</small>
                                </div>
                                <h4>{ itm.title }</h4>
                                <p>{ itm.preheading } </p>
                            </Link>
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

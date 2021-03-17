import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_API';
import { Link } from 'react-router-dom';

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
        <div className="wrap">
            <div className="loading">
                <div className="bounceball"></div>
                <div className="text">Fetching</div>
            </div>
        </div>
    </div>
    <div className="homeListContainer">
      <div className="row">
                  { Listdata.map((itm,k) => {
                if(k === 0 || k === 1 || k === 8 || k === 9 || k === 19 || k=== 20){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                            <Link to={`/Blog/${itm.url}`} exact >
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="300px" /> 
                                <div className="byAuth">
                                    - by {itm.auther} 
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
                            <Link to={`/Blog/${itm.url}`} exact >
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="250px" /> 
                                <div className="byAuth">
                                - by {itm.auther} 
                                </div>
                                <h4>{ itm.title }</h4>
                                <p>{ itm.preheading } </p>
                            </Link>
                        </div>
                    </div>
                    )
                })
            }
            <div className="col-md-12 midAbout">
                <p>About Tech Idiots</p>
                <h1><span>TechIdiots.com </span>is developed to give YOU a platform to <span>VIEW</span> and <span>GAIN</span> more information on latest <span>TECH</span> Based NEWS and information all in one . This <span>REFERS</span> iformation from many<span>TRUSTABLE</span>  resourses and <span>PRESENT</span> before YOU .... </h1>
            </div>
       </div>
    </div>
    </>
  );
}

export default HomeListoutComponent;

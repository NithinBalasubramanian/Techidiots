import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_API';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const CategoryBlogView = () => {
  
  let { category } = useParams();
  
  let [ Listdata , setListdata ] = useState([]);

  let [ FetchStatus , setFetchStatus ] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
       setFetchStatus(true);
        fetchAll();
    }, [category])

    const fetchAll = () =>{
        axios.get('/blogFetch/'+category)
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
                                    <small>{ moment(itm.createdOn).fromNow() }</small>
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
            <h1><span> Techidiots.in / { category }</h1>
          </div>
      </div>
      <div className="row">
                  { Listdata.map((itm,k) => {
                if(k === 5 || k === 6 || k === 10 || k === 11 || k === 15 || k=== 16){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="300px" /> 
                                <div className="byAuth">
                                    - From {itm.auther} 
                                </div>
                                <h4>{ itm.title }</h4>
                                <p>{ itm.preheading } </p>
                            </Link>
                        </div>                        
                    </div>
                    )
                }
              if(k > 4){
                return(
                    <div className="col-md-4 card_col">
                        <div className="card_home">
                            <Link to={`/Blog/${itm.category}/${itm.url}`} exact >
                                <img src={itm.imgUrl} alt={ itm.title } width="100%" height="250px" /> 
                                <div className="byAuth">
                                - From {itm.auther} 
                                </div>
                                <h4>{ itm.title }</h4>
                                <p>{ itm.preheading } </p>
                            </Link>
                        </div>
                    </div>
                    )
                  }
                })
            }
       </div>
    </div>
    </>
  );
}

export default CategoryBlogView;

import React , { useState , useEffect } from 'react';
import '../../../App.scss';
import axios from '../../../instance_API';

const HomeListoutComponent = () => {
  
  let [ Listdata , setListdata ] = useState([]);

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () =>{
        axios.get('/')
        .then((res) => {
            setListdata(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
  return(
    <div className="homeListContainer">
      <div className="row">
                  { Listdata.map((itm,k) => {
                if(k === 0 || k === 1){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                            <a href="#">
                                <img src={itm.imgUrl} alt="img" width="100%" height="250px" /> 
                                <h4>{itm.title}</h4>
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                </div>
                            </a>
                        </div>                        
                    </div>
                    )
                }
                return(
                    <div className="col-md-4 card_col">
                        <div className="card_home">
                            <a href="#">
                                <img src={itm.imgUrl} alt="img" width="100%" height="250px" /> 
                                <h4>{itm.title}</h4>
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                </div>
                            </a>
                        </div>
                    </div>
                    )
                })
            }
       </div>
    </div>
  );
}

export default HomeListoutComponent;

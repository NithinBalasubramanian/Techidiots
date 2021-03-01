import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_book_API_it';

const ItBookStore = () => {

  let [ Listdata , setListdata ] = useState([]);
  
  //api data from rapid api

  useEffect(() => {
     const timer = setTimeout(() => {
      fetchCont2()
      }, 3000);
    return () => clearTimeout(timer);
}, [])
    
    const fetchCont2 = () => {
      axios.get('')
        .then((res) => {
            setListdata(res.data);
           console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <>
            <h1>IT Book Collections </h1><small>( Source :  )</small>
            <div className="row">
            { Listdata.map((itm,k) => {
                return(
                    <div className="col-md-3 bookCard" >
                    <a href={itm.url} target="_blank">
                        <div className="bookDisplay" key={k}>
                            <img src={itm.image} alt="Book" width="100%" height="360px" />
                            <h4>{itm.title}</h4>
                            <div className="bookDesc">
                                {itm.subtitle}
                            </div>
                        </div>
                    </a>
                   </div>
                )
                })
            }
           </div>
        </>
    );
}

export default ItBookStore

import React , { useState , useEffect } from 'react';
import '../../App.scss';
import axios from '../../apiInstance/instance_book_API';

const BookStore = () => {

  let [ Listdata , setListdata ] = useState([]);
    
  let [ FetchStatus , setFetchStatus ] = useState(true);

  useEffect(() => {
    fetchAll();
}, [])

    const fetchAll = () =>{
        axios.get('')
        .then((res) => {
            setListdata(res.data.results.books);
            setFetchStatus(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    setTimeout(check,2000);
  
  const check = () => {
    alert("hello");
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
                <h1>Book Collections </h1><small>( Source : NewYork Times )</small>
                <div className="row">
                { Listdata.map((itm,k) => {
                    return(
                        <div className="col-md-3 bookCard" >
                        <a href={itm.amazon_product_url} target="_blank">
                            <div className="bookDisplay" key={k}>
                                <img src={itm.book_image} alt="Book" width="100%" height="360px" />
                                <h4>{itm.title}</h4>
                                <div class="row publish">
                                    <div class="col-md-4">
                                        <small>Pblished By </small><br/>
                                        <small>Author </small>
                                    </div>
                                    <div class="col-md-8">
                                        <small>: {itm.publisher}</small><br/>
                                        <small>: {itm.author}</small>
                                    </div>
                                </div>
                                <div className="bookDesc">
                                    {itm.description}
                                </div>
                            </div>
                        </a>
                        </div>
                    )
                    })
                }
                </div>
        </div>
        </>
    );
}

export default BookStore

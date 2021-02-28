import React , { useState , useEffect } from 'react';

import '../../App.scss';
import axios from '../../apiInstance/instance_book_API';

const BookStore = () => {

  let [ Listdata , setListdata ] = useState([]);
    
  let [ FetchStatus , setFetchStatus ] = useState(false);

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
            <div class="wrap">
                <div class="loading">
                    <div class="bounceball"></div>
                    <div class="text">Fetching</div>
                </div>
            </div>
        </div>
        <div className="homeListContainer">
                <h1>Books</h1>
        </div>
        </>
    );
}

export default BookStore
import React from 'react';
import './style.scss';
import HomeListoutComponent from './components/own_components/homeListoutComponent';
import BookStore from './components/collection_components/bookStore';
import { Switch , Route } from 'react-router-dom';

const ContentManager = () => {
  return(
    <div className="contMain">
    <Switch>
      <Route path="/" exact>
        <HomeListoutComponent />
      </Route>
      <Route path="/News" >
        <HomeListoutComponent />
      </Route>
      <Route path="/Books" >
        <BookStore />
      </Route>
    </Switch>
    </div>
  )
}

export default ContentManager;

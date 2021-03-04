import React from 'react';
import './style.scss';
import HomeListoutComponent from './components/own_components/homeListoutComponent';
import BlogView  from './components/own_components/homeListoutComponent';
import BookStore from './components/collection_components/bookStore';
import ArticleStore from './components/collection_components/articleStore';
import ApiTest from './components/collection_components/api_check';
import { Switch , Route } from 'react-router-dom';

const ContentManager = () => {
  return(
    <div className="contMain">
    <Switch>
      <Route path="/" exact>
        <HomeListoutComponent />
      </Route>
       <Route path="/Blog/:url" exact>
        <BlogView  />
       </Route>
      <Route path="/News" >
        <ArticleStore />
      </Route>
      <Route path="/Books" >
        <BookStore />
      </Route>
      <Route path="/ApiTest" >
        <ApiTest />
      </Route>
    </Switch>
    </div>
  )
}

export default ContentManager;

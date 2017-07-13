import 'babel-polyfill';
import React from "react";
import App from './components/App';
import {Router, Route, IndexRoute} from 'react-router';
import CategoryPage from './components/category/CategoryPage';
import LocationPage from './components/location/LocationPage';


export const getRoutes = (store) => {
  return (
    <Route path="/" component={App}>
        <IndexRoute component={LocationPage}/>
        <Route path="categories" component={CategoryPage}/>
        <Route path="locations"  component={LocationPage}/>        
    </Route>
  );
};
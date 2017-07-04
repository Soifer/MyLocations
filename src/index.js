import React from "react";
import ReactDOM, {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadLocations} from './actions/locationActions';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const store = configureStore();
store.dispatch(loadLocations());

render(
  <Provider store={store}>
     <Router history={browserHistory} routes={routes}/>
  </Provider>,
   document.getElementById("content"));
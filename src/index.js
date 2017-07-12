import React from "react";
import ReactDOM, {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import {getRoutes} from './routes';
import {Provider} from 'react-redux';
import {loadLocations} from './actions/locationActions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>{getRoutes(store)}</Router>
 </Provider>, document.getElementById("content"));

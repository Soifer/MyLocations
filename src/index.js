import  React from "react";
import ReactDOM , {render} from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';

import {Provider} from 'react-redux';
// import configureStore from './store/configureStore';

// const store = configureStore();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
    //   <Provider store={store}>
             
    //   </Provider>,
    <Router history={browserHistory} routes={routes} />,       
      document.getElementById("content")
);
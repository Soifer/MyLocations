import {combineReducers} from 'redux';
import locations from './locationReducer';
import categories from './categoryReducer';
import toolbar from './upperToolbarReducer';
import selectedIndex from './bottomToolbarReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    locations,
    toolbar,
    categories,
    selectedIndex,
    routing: routerReducer
});

export default rootReducer;
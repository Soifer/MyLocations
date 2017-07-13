import {combineReducers} from 'redux';
import locations from './locationReducer';
import categories from './categoryReducer';
import toolbar from './upperToolbarReducer';
import selectedIndex from './bottomToolbarReducer';
import groupby from './groupByCategoriesReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    locations,
    toolbar,
    categories,
    selectedIndex,
    groupby,
    routing: routerReducer
});

export default rootReducer;
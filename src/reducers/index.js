import {combineReducers} from 'redux';
import locations from './locationReducer';
import categories from './categoryReducer';
import toolbar from './upperToolbarReducer';
import selectedIndex from './bottomToolbarReducer';
import groupby from './groupByCategoriesReducer';
import dialogLocation from './dialogLocationReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    locations,
    toolbar,
    categories,
    selectedIndex,
    groupby,
    dialogLocation,
    routing: routerReducer
});

export default rootReducer;
import {combineReducers} from 'redux';
import locations from './locationReducer';
import categories from './categoryReducer';
import toolbar from './upperToolbarReducer';
import selectedIndex from './bottomToolbarReducer';

const rootReducer = combineReducers({
    locations,
    toolbar,
    categories,
    selectedIndex
});

export default rootReducer;
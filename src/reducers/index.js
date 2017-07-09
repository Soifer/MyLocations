import {combineReducers} from 'redux';
import locations from './locationReducer';
import categories from './categoryReducer';
import toolbar from './upperToolbarReducer';

const rootReducer = combineReducers({
    locations,
    toolbar,
    categories
});

export default rootReducer;
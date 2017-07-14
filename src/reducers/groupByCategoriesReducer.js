import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function groupByCategoriesReducer(state = initialState.groupby, action) {
    switch (action.type) {
        case types.GROUPBY_CATEGORIES_SUCCESS:        
            return action.groupby;
        default:
            return state;
    }
}

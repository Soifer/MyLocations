import * as types from './actionTypes';

export function groupByCategoriesSuccess(groupby) {
    return {type: types.GROUPBY_CATEGORIES_SUCCESS, groupby};    
}

export function groupByCategories(groupby) {
    debugger
    return function (dispatch) {
        dispatch(groupByCategoriesSuccess(groupby));
    };
}
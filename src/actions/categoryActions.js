import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';
import {setToolbarType} from './upperToolbarActions';
import {setBottomToolbarType} from './bottomToolbarActions';
import {sortTypes} from '../tools/constants';

export function loadCategoriesSuccess(categories) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function sortByCategoriesSuccess(sort) {
    switch (sort) {
        case sortTypes.az:
        return {type: types.SORTBY_CATEGORIES_SUCCESS_BY_AZ};
        case sortTypes.date:
        return {type: types.SORTBY_CATEGORIES_SUCCESS_BY_DATE};
        default:
            break;
    }    
}

export function loadCategories(type) {
    return function (dispatch) {        
        return categoryApi.getAllCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
            dispatch(loadToolbar(categories));           
        }).catch(error => {
            throw(error);
        });
    };
}

export function categorySortBy(sort) {
    return function (dispatch) {
        dispatch(sortByCategoriesSuccess(sort));
    };
}

export function loadToolbar(categories){
        return function (dispatch) {        
        dispatch(setToolbarType("categories",categories));
        dispatch(setBottomToolbarType(1)); 
    };
}
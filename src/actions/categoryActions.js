import * as types from './actionTypes';
import categoryApi from '../api/categoryApi';
import {setToolbarType} from './upperToolbarActions';
import {setBottomToolbarType} from './bottomToolbarActions';

export function loadCategoriesSuccess(categories) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories(type) {
    return function (dispatch) {        
        return categoryApi.getAllCategories().then(categories => {
            console.log(categories);
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadToolbar(categories){
        return function (dispatch) {        
        dispatch(setToolbarType("categories",categories));
        dispatch(setBottomToolbarType(1)); 
    };
}
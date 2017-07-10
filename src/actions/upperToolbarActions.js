import * as types from './actionTypes';
import ToolbarModel from '../models/toolbarModel';
import {loadLocations}  from './locationActions';
import {loadCategories} from './categoryActions';

export function setToolbarTypeSuccess(toolbar) {
    return {type: types.SET_TOOLBAR_TYPE_SUCCESS, toolbar};
}


export function initToolbarType() {
    return function (dispatch) {
    let toolbar = new ToolbarModel();
    dispatch(setToolbarTypeSuccess(toolbar));
    dispatch(loadLocations());
    dispatch(loadCategories());
    }
;}

export function setToolbarType(type, list) {
    return function (dispatch) {
        let toolbar = new ToolbarModel();
        console.log("toolbar",toolbar);
        switch (type) {
            case 'locations':
                toolbar.groupby = list;
                toolbar.name = type;
                console.log("type", toolbar);
                dispatch(setToolbarTypeSuccess(toolbar));
                break;
            case 'categories':
                toolbar.name = type;
                console.log("type", toolbar);
                dispatch(setToolbarTypeSuccess(toolbar));
                break;
            default:
               dispatch(setToolbarTypeSuccess(toolbar));
                break;
        }
        // return locationApi.getAllLocations().then(locations => {
        // dispatch(setLocationsToolbarSuccess(locations)); }).catch(error => {
        // throw(error); });
    };
}
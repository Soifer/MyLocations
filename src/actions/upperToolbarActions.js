import * as types from './actionTypes';
import ToolbarModel from '../models/toolbarModel';

export function setToolbarTypeSuccess(toolbar) {
    return {type: types.SET_TOOLBAR_TYPE_SUCCESS, toolbar};
}


export function setToolbarType(type, list) {
    return function (dispatch) {
        let toolbar = new ToolbarModel();
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
                break;
        }
        // return locationApi.getAllLocations().then(locations => {
        // dispatch(setLocationsToolbarSuccess(locations)); }).catch(error => {
        // throw(error); });
    };
}
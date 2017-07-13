import * as types from './actionTypes';
import ToolbarModel from '../models/toolbarModel';
import {loadLocations} from './locationActions';
import {loadCategories} from './categoryActions';
import {proxySortBy, proxyGroupBy} from './componentsProxyActions';
import {pageComponents} from '../tools/constants';
 
export function setToolbarTypeSuccess(toolbar) {
    return {type: types.SET_TOOLBAR_TYPE_SUCCESS, toolbar};
}

export function sortBy(type,sort) {
    return function (dispatch) {        
        dispatch(proxySortBy(pageComponents[type], sort));
    };
}

export function groupBy(type, group) {
    return function (dispatch) {        
        dispatch(proxyGroupBy(pageComponents[type], group));
    };
}

export function setToolbarType(type, data) {
    return function (dispatch) {
        let toolbar = new ToolbarModel();
        switch (type) {
            case pageComponents.locations:
                console.log("case locations", data.categories);
                toolbar.groupby = data.categories.length > 0
                    ? data.categories
                    : [];
                toolbar.name = type;
                console.log("type", toolbar);
                dispatch(setToolbarTypeSuccess(toolbar));
                break;
            case pageComponents.categories:
                toolbar.name = type;
                console.log("type", toolbar);
                dispatch(setToolbarTypeSuccess(toolbar));
                break;
            default:
                dispatch(setToolbarTypeSuccess(toolbar));
                break;
        }
    };
}
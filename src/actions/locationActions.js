import * as types from './actionTypes';
import locationApi from '../api/locationApi';
import {setToolbarType} from './upperToolbarActions';
import {loadCategories} from './categoryActions';
import {setBottomToolbarType} from './bottomToolbarActions';
import {sortTypes} from '../tools/constants';
import {groupByCategories} from './groupByCategoriesActions';
import {loadDialogLocation} from './locationDialogActions';

export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function sortByLocationsSuccess(sort) {
    switch (sort) {
        case sortTypes.az:
        return {type: types.SORTBY_LOCATIONS_SUCCESS_BY_AZ};
        case sortTypes.date:
        return {type: types.SORTBY_LOCATIONS_SUCCESS_BY_DATE};
        default:
            break;
    }    
}


export function loadLocations() {
    return function (dispatch) {
        return locationApi
            .getAllLocations()
            .then(data => {
                dispatch(loadLocationsSuccess(data.locations));
                dispatch(loadToolbar(data));
            })
            .catch(error => {
                throw(error);
            });
    };
}


export function loadLocation(data) {
    return function (dispatch) {
        dispatch(loadDialogLocation(data));
    };
}

export function locationsSortBy(sort) {
    return function (dispatch) {
        dispatch(sortByLocationsSuccess(sort));
    };
}

export function loadToolbar(data) {
    return function (dispatch) {
        console.log("loc categ", data);
        dispatch(setToolbarType("locations", data));
        dispatch(setBottomToolbarType(0));
    };
}


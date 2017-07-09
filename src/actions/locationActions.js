import * as types from './actionTypes';
import locationApi from '../api/locationApi';
import {setToolbarType} from './upperToolbarActions';

export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function loadLocations() {
    return function (dispatch) {        
        return locationApi.getAllLocations().then(locations => {
            dispatch(loadLocationsSuccess(locations));
            dispatch(setToolbarType("locations",locations));
        }).catch(error => {
            throw(error);
        });
    };
}
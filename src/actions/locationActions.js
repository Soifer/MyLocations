import * as types from './actionTypes';
import locationApi from '../api/locationApi';
import {setToolbarType} from './upperToolbarActions';
import {setBottomToolbarType} from './bottomToolbarActions';
 
export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function loadLocations() {
    return function (dispatch) {        
        return locationApi.getAllLocations().then(locations => {
            dispatch(loadLocationsSuccess(locations));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadToolbar(locations){
        return function (dispatch) {        
        dispatch(setToolbarType("locations",locations));
        dispatch(setBottomToolbarType(0));        
    };
}
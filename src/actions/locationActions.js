import * as types from './actionTypes';
import locationApi from '../api/locationApi';
import {setToolbarType} from './upperToolbarActions';
import {loadCategories} from './categoryActions';
import {setBottomToolbarType} from './bottomToolbarActions';
import url from '../tools/urlConverter';
 
export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function sortByLocationsSuccess(locations) {
    return {type: types.SORTBY_LOCATIONS_SUCCESS };
}

export function loadLocations() {
    return function (dispatch) {    
        return locationApi.getAllLocations().then(data => {
            dispatch(loadLocationsSuccess(data.locations));       
            dispatch(loadToolbar(data)); 
        }).catch(error => {
            throw(error);
        });
    };
}
export function locationsSortBy(){
     return function (dispatch) {  
           dispatch(sortByLocationsSuccess());
     };
}
export function loadToolbar(data){
        return function (dispatch) {     
            console.log("loc categ",data);
        dispatch(setToolbarType("locations",data));
        dispatch(setBottomToolbarType(0));        
    };
}
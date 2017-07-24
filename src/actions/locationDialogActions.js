import * as types from './actionTypes';
import {sortTypes} from '../tools/constants';


export function loadDialogLocationSuccess(dialogLocation) {
    return {type: types.LOAD_DIALOGLOCATION_SUCCESS, dialogLocation};
}


export function loadDialogLocation(dialogLocation) {
    return function (dispatch) {
        dispatch(loadDialogLocationSuccess(dialogLocation));
    };
}




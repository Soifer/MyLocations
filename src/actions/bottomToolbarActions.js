import * as types from './actionTypes';

export function setBottomToolbarTypeSuccess(selectedIndex) {
    return {type: types.SET_BOTTOM_TOOLBAR_TYPE_SUCCESS, selectedIndex};
}


export function setBottomToolbarType(selectedIndex) {
    return function (dispatch) {
        dispatch(setBottomToolbarTypeSuccess(selectedIndex));
    };
}
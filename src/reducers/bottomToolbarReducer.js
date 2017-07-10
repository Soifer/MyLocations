import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.selectedIndex, action) {
  switch (action.type) {
    case types.SET_BOTTOM_TOOLBAR_TYPE_SUCCESS:
      return action.selectedIndex;
    default:
      return state;
  }
}
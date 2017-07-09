import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.toolbar, action) {
  switch (action.type) {

    case types.SET_TOOLBAR_TYPE_SUCCESS:
      return Object.assign({}, action.toolbar);
    default:
      return state;
  }
}0
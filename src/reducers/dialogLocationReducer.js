import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.dialogLocation, action) {
  switch (action.type) {
    case types.LOAD_DIALOGLOCATION_SUCCESS:
      return action.dialogLocation;  
    default:
      return state;
  }
}
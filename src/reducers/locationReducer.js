import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.locations;
 
    // case types.CREATE_LOACATION_SUCCESS:
    //   return [
    //     ...state,
    //     Object.assign({}, action.course)
    //   ];
    default:
      return state;
  }
}
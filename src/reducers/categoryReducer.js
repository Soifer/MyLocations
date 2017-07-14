import * as types from '.././actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.categories, action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    case types.SORTBY_CATEGORIES_SUCCESS_BY_AZ:    
      return [...state.slice(0,state.length).sort(function(a, b) {
                let textA = a.name.toUpperCase();
                let textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
            ];
    case types.SORTBY_CATEGORIES_SUCCESS_BY_DATE:    
      return [...state.slice(0,state.length).sort(function(a, b) {
                let textA = a.id;
                let textB = b.id;
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
            ];
    default:
      return state;
  }
}
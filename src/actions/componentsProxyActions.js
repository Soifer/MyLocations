import {locationsSortBy} from './locationActions';
import {loadCategories} from './categoryActions';
import pageComponents from '../tools/constants';

export function proxySortBy(type, sort) {
    switch (type) {
        case pageComponents.locations:
            return function (dispatch) {
                dispatch(locationsSortBy(sort));
            };
        case pageComponents.categories:
            return function (dispatch) {
                dispatch(loadCategories(sort));
            };
        default:
            break;
    }

}
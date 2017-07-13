import {locationsSortBy} from './locationActions';
import {loadCategories} from './categoryActions';
import {pageComponents} from '../tools/constants';
import {groupByCategories} from './groupByCategoriesActions';

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
export function proxyGroupBy(type, group) {
    switch (type) {
        case pageComponents.locations:
        debugger
            return function (dispatch) {
                dispatch(groupByCategories(group));
            };
        case pageComponents.categories:
            return function (dispatch) {
                dispatch(loadCategories(group));
            };
        default:
            break;
    }
}
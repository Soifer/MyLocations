import {locationsSortBy} from './locationActions';
import {categorySortBy} from './categoryActions';
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
                dispatch(categorySortBy(sort));
            };
        default:
            break;
    } 
}
export function proxyGroupBy(type, group) {
    switch (type) {
        case pageComponents.locations:
            return function (dispatch) {
                dispatch(groupByCategories(group));
            };
        default:
            break;
    }
}
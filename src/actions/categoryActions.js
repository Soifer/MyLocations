import * as types from './actionTypes';

export function loadCategoriesSuccess(categories) {
    return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
    // return function (dispatch) {
    //     dispatch(beginAjaxCall());
    //     return courseApi.getAllCourses().then(courses => {
    //         dispatch(loadCoursesSuccess(courses));
    //     }).catch(error => {
    //         throw(error);
    //     });
    // };
}
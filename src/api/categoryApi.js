const categoriesList = [
    {
        name: "work"
    }, {
        name: "home"
    }, {
        name: "parents"
    }
];

(function () {
    if (!localStorage.getItem('categories')) {
        localStorage.setItem("categories", JSON.stringify(categoriesList));
    }
})();

class CategoryApi {
    static getAllCategories() {
        return new Promise((resolve, reject) => {
            const categories = JSON.parse(localStorage.getItem('categories'));
            resolve(Object.assign([], categories));
        });
    }
}
export default CategoryApi;
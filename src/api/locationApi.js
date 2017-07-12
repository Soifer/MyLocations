import categoryApi from './categoryApi';  

const locationsList = [
    {
        name: "Haifa",
        address: "nahum hat 1",
        coordinate: "",
        categories: ["work"]
    }, {
        name: "Nesher",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }
];

(function () {
    if (!localStorage.getItem('locations')) {
        localStorage.setItem("locations",  JSON.stringify(locationsList));
    }
})();



class LocationApi {
    static getAllLocations() {      
        return new Promise((resolve, reject) => {
            const locations = JSON.parse(localStorage.getItem('locations'));            
             categoryApi.getAllCategories().then((categories)=>{
                 console.log("apiLocations",locations);
              resolve(
                     Object.assign([], {locations,categories})                
                  );
            });
        });
    }
}
export default LocationApi;
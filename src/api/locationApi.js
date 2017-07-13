import categoryApi from './categoryApi';  

const locationsList = [
    {   
        id: 1,
        name: "Haifa",
        address: "nahum hat 1",
        coordinate: "",
        categories: ["work"]
    }, {
        id: 2,
        name: "Nesher",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 3,
        name: "Netanya",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 4,
        name: "Karmiel",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 5,
        name: "TLV",
        address: "Amos 18",
        coordinate: "",
        categories: ["work"]
    }, {
        id: 6,
        name: "Eilat",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 7,
        name: "Jerusalem",
        address: "Amos 18",
        coordinate: "",
        categories: ["work"]
    }, {
        id: 8,
        name: "Tiberias",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 8,
        name: "Lod",
        address: "Amos 18",
        coordinate: "",
        categories: ["work"]
    }, {
        id: 9,
        name: "Sderot",
        address: "Amos 18",
        coordinate: "",
        categories: ["home"]
    }, {
        id: 10,
        name: "Acre",
        address: "Amos 18",
        coordinate: "",
        categories: ["parents"]
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
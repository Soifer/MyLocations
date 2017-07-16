import categoryApi from './categoryApi';  

const locationsList = [
    {   
        id: 1,
        name: "Haifa",
        address: "nahum hat 1",
        coordinate: {lat:32.793701,lng:34.986220},
        categories: ["work"]
    }, {
        id: 2,
        name: "Nesher",
        address: "Amos 18",
        coordinate: {lat:32.764617,lng:35.049151},
        categories: ["home"]
    }, {
        id: 3,
        name: "Netanya",
        address: "Sderot Jabotinsky 26",
        coordinate: {lat:32.322133,lng:34.851302},
        categories: ["home"]
    }, {
        id: 4,
        name: "Karmiel",
        address: "Beit Hakerem Blvd 17",
        coordinate: {lat:32.911107,lng:35.285547},
        categories: ["parents"]
    }, {
        id: 5,
        name: "TLV",
        address: "Sarona",
        coordinate: {lat:32.072416,lng:34.786323},
        categories: ["work"]
    }, {
        id: 6,
        name: "Eilat",
        address: "Ice Mall",
        coordinate: {lat:29.558101,lng:34.949258},
        categories: ["home"]
    }, {
        id: 7,
        name: "Jerusalem",
        address: "Cultural Center",
        coordinate: {lat:31.768574,lng:35.215869},
        categories: ["work"]
    }, {
        id: 8,
        name: "Tiberias",
        address: "Hotel Prima Galil",
        coordinate: {lat:32.796252,lng:35.530479},
        categories: ["home"]
    }, {
        id: 8,
        name: "Lod",
        address: "Sderot David HaMelech 14",
        coordinate: {lat:31.950934,lng:34.887138},
        categories: ["work"]
    }, {
        id: 9,
        name: "Sderot",
        address: "Urban Market",
        coordinate: {lat:31.522866,lng:34.596175},
        categories: ["home"]
    }, {
        id: 10,
        name: "Acre",
        address: "Train staition",
        coordinate: {lat: 32.933040,lng:35.082800},
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
const productInfo = [

    { key: "name", value: "Laptop" },
  
    { key: "price", value: 12000 },
  
    { key: "brand", value: "Dell" },
  
  ];
  
const productInfoTranformed = productInfo.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
}, {});
console.log(productInfoTranformed);

const colleges = [

    { item: "Book", university: "Harvard" },
  
    { item: "Book", university: "MIT" },
  
    { item: "Book", university: "Stanford" },
  
  ];
  
const university = colleges.reduce((acc, curr) => {
    acc.push(curr.university);
    return acc;
}, []);
console.log(university);

const userPreferences = [

    { key: "theme", value: "Dark Mode" },
  
    { key: "fontSize", value: 16 },
  
    { key: "notifications", value: true },
  
];
  
const userPreferencesTranformed = userPreferences.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
}, {});
console.log(userPreferencesTranformed);

const continents = [

    { key: "Asia", country: "India" },
  
    { key: "Europe", country: "France" },
  
    { key: "North America", country: "USA" },
  
  ];
  
const continentsTransformed = continents.reduce((acc, curr) => {
    acc[curr.key] = curr.country;
    return acc;
}, []);
console.log(continentsTransformed);  

const information = [

    { key: "city", value: "New York" },
  
    { key: "population", value: 8398748 },
  
    { key: "area", value: 468.9 },
  
  ];
  
const informationTransformed = information.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
}, []);
console.log(informationTransformed);  
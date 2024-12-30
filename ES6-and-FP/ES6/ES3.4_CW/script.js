const extractArrayValues = (arr) => {
    const [a, b, third] = arr;
    console.log(a);
    console.log(b);
    console.log(third);
}

extractArrayValues([1, 2, 3]);

const extractValuesFromObj = (obj) => {
    const {name, age, city} = obj;
    console.log(`${name} is ${age} years old and lives in ${city}`);
}
extractValuesFromObj({name: "Alice", age: 25, city: "Paris"});

const obj1 = {
    id: 1,
    info: {
        title: "Javascri[pt Basics",
        descriptions: "Learn Fundamentals"
    }
};

const getObjValues = (obj) => {
    const { info: {title, descriptions} } = obj;
    console.log(title);
    console.log(descriptions);
};
getObjValues(obj1);
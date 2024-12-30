let numbersArray = [1, 2, 3];
let numbersArr = [...numbersArray];
console.log(numbersArr);

const duplicateArray = (arr) => [...arr];
console.log(duplicateArray(["apple", "banana"]));

const addNewElement = (arr, element) => [...arr, element];
console.log(addNewElement(["Kiwi", "Orange"], "apple"));

const combineArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(combineArray([11, 12 , 13], [14, 15, 16]));

const copyObject = (obj, key, value) => ({...obj, [key]: value});
console.log(copyObject({name: "Alice", age: 20}, "favColor", "blue"));

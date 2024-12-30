const copyAndAppend = (arr, element) => [...arr, element];
console.log(copyAndAppend(["apple", "orange"], "banana"));

const copyAndAdd = (arr, elemennt) => [...arr, elemennt];
console.log(copyAndAdd([10, 20], 30));

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([10, 20], [30, 40, 50]));

const mergeNameArrays = (arr1, arr2) => [...arr1, arr2];
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

const copyPersonObject = (obj, newKey, newValue) => ({ ...obj, [newKey]: newValue});
console.log(copyPersonObject({ firstName: "Alice", age: 20 }, "lastName", "Johnson"));

const copyEmployeeObject = (obj, newKey, newValue) => ({...obj, [newKey]: newValue});
console.log(copyEmployeeObject({ employeeId: 243, name: "Bob", age: 20 }, "department", "IT department"));

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({ x: "hello" }, { y: "world" }));

const modifyObjectProperties = (obj, modifications) => ({ ...obj, ...modifications});
console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 }));
console.log(modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" }));

const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2});
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 }));

const mergeThreeArrays = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

const mergeThreeArray = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];
console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));

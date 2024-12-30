const createStringObject = str => ({text: str});
console.log(createStringObject("Hello"));

const calculateSumAndProduct = (a, b) => ({sum: a + b, product: a * b});
console.log(calculateSumAndProduct(2, 3));

const ceratePersonObject = (name, age) => ({name: name, age: age});
console.log(ceratePersonObject("Alice", 25));
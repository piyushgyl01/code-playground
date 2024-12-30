const sumAndDifference = (arr) => {
    const [a, b] = arr;
    return `Sum: ${a + b}, Differnece: ${a - b}`;
};
console.log(sumAndDifference([5, 3])); 
console.log(sumAndDifference([10, 7])); 

const extractFirstAndLast = (str) => {
    const first = str[0];
    const last = str[str.length - 1];
    return `First Character: ${first}, Last Character: ${last}`
};
console.log(extractFirstAndLast("hello")); 
console.log(extractFirstAndLast("world"));

const calculateRectangleArea = ({ length, width} ) => {
    return `The area of rectangke is ${length * width}`;
};
console.log(calculateRectangleArea({ length: 5, width: 3 }));
console.log(calculateRectangleArea({ length: 8, width: 4 }));

const getFirstTwoColors = (colors) => {
    const [first, second] = colors;
    return `The first two colors are: ${first} and ${second}`;
};
console.log(getFirstTwoColors(["red", "blue", "green", "yellow"]));
console.log(getFirstTwoColors(["orange", "purple", "pink"])); 

const extractNestedInfo = ({ data: {name, age, country} }) => {
    return `${name} is ${age} years old and lives in ${country}`;
};
console.log(extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } }));
console.log(extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } }));

const productAndDifference = (arr) => {
    const [a, b, c] = arr;
    return `Product and Difference: ${(a * b) - c}`;
};
console.log(productAndDifference([5, 3, 5, 6])); 
console.log(productAndDifference([10, 7, 35, 30])); 

const extractData = ({ product: { itemName, description, manufacturingCountry }}) => {
    return `Item Name: ${itemName}, Description: ${description} Manufacturing Country: ${manufacturingCountry}`;
}
console.log(extractData({ id: 1, product: { itemName: "Pencil", description: "Extra Dark Pencil", manufacturingCountry: "USA" } }));

console.log(extractData({ id: 2, product: { itemName: "Sharpener", description: "Faber Castell Premium", manufacturingCountry: "Germany" } }));

const concatenateStrings = (...string) => `${string.join(" ")}`;
console.log(concatenateStrings("Hello", "world", "!")); 
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn.")); 

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));

const concatenateWithSeparator = (seperator, ...str) => `${str.join(`${seperator }`)}`
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'));       

const extractObjectValues = ({ name, age }) => `Name: ${name}, Age: ${age}`;
console.log(extractObjectValues({ name: "Alice", age: 25 }));
console.log(extractObjectValues({ name: "Bob", age: 30 }));
 
const extractArrayValues = (arr) => {
    const [a, b, c, ...rest] = arr;
    return `Values: ${[a, b, c, ...rest].join(", ")}`;
}
console.log(extractArrayValues([1, 2, "Hello", 3]));
console.log(extractArrayValues(["apple", "orange", "banana"]));

const extractNestedValues = ({data: { firstName, lastName, age }}) => `${firstName} ${lastName} will be ${age + 5} years old in five years.`;
console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}));
console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}));

const printInfo = ({ name: { firstName, lastName }, department}) => `${firstName} ${lastName} works in ${department} department.`;
console.log(printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" }));
console.log(printInfo({ name: { firstName: "Alice", lastName: "Smith" }, department: "Legal" }));

const printUserDetails = ({name = "Ajay", username = "anonymous", post = "Hello World"}) => {
    return `${username} posted "${post}"`;
}
console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }));
console.log(printUserDetails({}));

const checkEvenOdd = (num) => `${num} is ${num % 2 === 0 ? "an even number" : "add odd number"}.`;
console.log(checkEvenOdd(8));  
console.log(checkEvenOdd(15));

const checkDiscountEligibility = (purchaseAmount, isPremiumCustomer) => `You are eligible for a ${purchaseAmount > 100 && isPremiumCustomer ? "10%" : "5%"} discount.`;
console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const object1 = { name: 'Alice', age: 30 }; 
const object2 = { city: 'London', country: 'UK' };
console.log(mergeObjects(object1, object2));

const addKeyValuePair = (obj, key, value) => ({ ...obj, [key]: value})
const object = { name: 'Dave', age: 25 };
console.log(addKeyValuePair(object, 'city', 'New York'));
console.log(object);

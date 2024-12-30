const getRandomNumber = () => Math.floor(Math.random() * 10);
console.log(getRandomNumber());

const getCourseDate = () => new Date().toLocaleDateString();
console.log(getCourseDate());

const getGreeting = () => "Hello, Welcome to neoG Camp!";
console.log(getGreeting());

const getSquareValue = (num) => num ** 2;
console.log(getSquareValue(3));

const isPositive = num => num > 0;
console.log(isPositive(3));
console.log(isPositive(-2));

const isEven = num => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(3));
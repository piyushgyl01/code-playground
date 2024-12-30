const isOdd = (num) => num % 2 !== 0;
console.log("Is 5 odd?", isOdd(5));

const getStringLength = (str) => str.length;
console.log("Length of 'Hello':", getStringLength("Hello"));

const toUpperCase = (str) => str.toUpperCase();
console.log("Capitalised `Hello`:", toUpperCase("Hello"));

const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

const getCurrentTime = () => new Date().toLocaleTimeString();
console.log(getCurrentTime());

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
console.log("32°F in Celsius:", fahrenheitToCelsius(32)); 

const isEmptyString = (str) => str.length === 0;
console.log(isEmptyString("Hello")); 
console.log(isEmptyString(""));      

const getRandomNumber = () => Math.floor(Math.random() * 30);
console.log("Random number between 1 and 30:", getRandomNumber());

const getRandomSquareRoot = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    console.log(num);
    return Math.sqrt(num);
}
console.log("Square root of a random number between 1 and 100:", getRandomSquareRoot());

const toLowerCaseString = (str) => str.toLowerCase();
console.log("Lowercase of 'WORLD':", toLowerCaseString("WORLD"));
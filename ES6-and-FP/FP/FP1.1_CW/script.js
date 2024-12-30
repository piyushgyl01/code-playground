const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map((num) => num * 2);
console.log(numbersMultipliedByTwo);

const numbersArray = [2, 4, 5, 6];
const doubleNumbersArray = numbersArray.map((num) => num * num);
console.log(`Doubled array: ${doubleNumbersArray}`);

const wordsArray = ["apple", "mango", "orange", "grapes"];
const capitalsedWordsArray = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalsedWordsArray);

const numericArray = [1, 2, 3, 4, 5];
const stringArray = numericArray.map((num) => num.toString());
console.log(`String Array: ${stringArray}`);
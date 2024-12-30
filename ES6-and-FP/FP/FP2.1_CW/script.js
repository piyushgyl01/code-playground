const numbers = [1, 2, 3, 4, 5, 6, 8, 9];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["Apple", "Mango", "Banana", "Orange"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords)

const numbersArray = [2, -7, 5, 7, -8, -6, 9];
const postiiveNumberArray = numbersArray.filter((number) => number > 0);
console.log(postiiveNumberArray);

const fruits = ["apple", "kiwi", "orange", "grapes", "melon"];
const fruitsContainingA = fruits.filter((fruit) => fruit.includes("a"));
console.log(fruitsContainingA);
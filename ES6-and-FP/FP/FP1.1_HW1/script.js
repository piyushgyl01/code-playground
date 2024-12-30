const words = ["apple", "banana", "kiwi", "orange", "grape"];
const lengthOfWordsArray = words.map((word) => word.length);
console.log(`Length of "Words" Array: ${lengthOfWordsArray.join(", ")}`);

const numbers = [1, 2, 3, 4, 5];
const squareOfNumbersArray = numbers.map((num) => num * num);
console.log(`Sqaure of "Numbers" array: ${squareOfNumbersArray.join(", ")}`);

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];
const capitaliseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(`Capitalised Fruits Array: ${capitaliseFruits.join(", ")}`);

const nums = [4, 9, 16, 25, 36];
const squareRootOfNums = nums.map((num) => Math.sqrt(num));
console.log(`Square root of array: ${squareRootOfNums.join(", ")}`);

const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];
const addPrefixFruits = prefixFruits.map((fruit) => "fruit-" + fruit);
// console.log(`Fruits with a prefix "Fruit": ${addPrefixFruits.join(", fruit-")}`);
console.log(`Fruits with a prefix "Fruit": ${addPrefixFruits.join(", ")}`);

const numbersArray = [1, 2, 3, 4, 5];
const numbersArrayPlus10 = numbersArray.map((num) => num + 10);
console.log(`Numbers Array with ten added: ${numbersArrayPlus10.join(", ")}`);

const numsArray = [1, 2, 3, 4, 5];
const numsArraySqr = numsArray.map((num) => num + (num * num));
console.log(`Square of each number to that number: ${numsArraySqr.join(", ")}`)

const numsArr = [-5, 3, -8, 12, -1, 6];
const absNumsArr = numsArr.map((num) => Math.abs(num));
console.log(`Nums Arr with the absolute values: ${absNumsArr.join(", ")}`);

const phrases = ["Hello", "How are you", "Goodbye"];
const appendToPhrases = phrases.map((phrase) => phrase + "!");
console.log(`Phrases Array with being appended: ${appendToPhrases.join(", ")}`);

const word = ["apple", "banana", "kiwi", "orange", "grape"];
const capitaliseThirdWord = word.map((word) => word.slice(0, 2) + word.charAt(2).toUpperCase() + word.slice(3));
console.log(`Word with third being capitalised: ${capitaliseThirdWord.join(", ")}`);
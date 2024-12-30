const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log("The even numbers:", evenNumbers);

const words = ["kiwi", "mango", "apple", "orange", "banana"];
const wordLengthGreaterThanFive = words.filter((word) => word.length > 5);
console.log("Strings that have length greater than 5 :", wordLengthGreaterThanFive);

const wordsArr = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const stringsStartsWithS = wordsArr.filter((word) => word.startsWith("S"));
console.log("Strings that start with letter 'S':", stringsStartsWithS);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMultipleOfThree = threeMultiples.filter((num) => num % 3 !== 0);
console.log("Numbers that are not multiples of three:", notMultipleOfThree);

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const numDivisibleBy3And7 = numbs.filter((num) => num % 3 === 0 && num % 7 === 0);
console.log("Numbers that are divisible by both 7 and 3:", numDivisibleBy3And7);

const wordsi = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const lowerCaseWords = wordsi.filter((word) => word === word.toLowerCase());
console.log("Strings that are in lowercase:", lowerCaseWords);

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const excludesA = wordsY.filter((word) => !word.includes("a"));
console.log("Strings that do not contain with the letter 'a'", excludesA);

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfEither2Or3 = numsOnetoTen.filter((nums) => nums % 2 === 0 || nums % 3 === 0);
console.log("Numbers that are multiples of either 2 or 3:", multiplesOfEither2Or3);

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const includesYOrA = feelingWords.filter((word) => word.includes("y", "a"));
console.log("Strings that includes the letter 'y' or 'a':", includesYOrA);

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const numBetween20To40 = newNums.filter((num) => num > 20 && num < 40);
console.log("Numbers between 20 to 40:", numBetween20To40);
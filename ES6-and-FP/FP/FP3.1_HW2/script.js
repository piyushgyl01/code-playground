const stationeryWords = [

    "pen",
  
    "notebook",
  
    "eraser",
  
    "notebook",
  
    "pencil",
  
    "notebook",
  
    "pencil",
  
  ];

const stationeryWordsLength = stationeryWords.reduce((accumulator, currentValue) => (currentValue.length + accumulator), 0)
console.log(stationeryWordsLength);

const numbersArray = [1, 2, 3, 4, 5, 6]

const sumOfEvenNums = numbersArray.reduce((accumulator, currentValue) => (currentValue % 2 === 0 ? currentValue + accumulator : accumulator), 0);
console.log(sumOfEvenNums);

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10]

const sumOfOddNums = numsArr.reduce((accumulator, currentValue) => (currentValue % 2 !== 0 ? accumulator + 1 : accumulator), 0);
console.log(sumOfOddNums);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const countOfOddAndEven = nums.reduce((accumulator, currentValue) => {
    currentValue % 2 === 0 ? accumulator.even = (accumulator.even || 0) + 1 : accumulator.odd = (accumulator.odd || 0) + 1;
    return accumulator;
}, {});
console.log(countOfOddAndEven);

const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]

const countOfPosAndNeg = allNumns.reduce((accumulator, currentValue) => {
    currentValue > 0 ? accumulator.positive = (accumulator.positive || 0) + 1 : accumulator.negative = (accumulator.negative || 0) + 1;
    return accumulator
}, {})
console.log(countOfPosAndNeg);

const numPositive = [-2, 3, 4, 0, -5, 6]

const productOfNegativeNum = numPositive.reduce((accumulator, currentValue) => (currentValue < 0 ? currentValue * accumulator : accumulator), 1);
console.log(productOfNegativeNum);

const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"]

const wordCapsCap = wordsCaps.reduce((accumulator, currentValue) => accumulator + " " + currentValue.toUpperCase(), "");
console.log(wordCapsCap);

const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

const countOfPositiveEven = allNumsArr.reduce((accumulator, currentValue) => {
    currentValue % 2 === 0 && currentValue > 0 ? accumulator.posEven = (accumulator.posEven || 0) + 1 : accumulator.others = (accumulator.others || 0) + 1;
    return accumulator;
}, {});
console.log(countOfPositiveEven);

const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11]

const sumfOfAllNegativeNum = numbersArr.reduce((accumulator, currentValue) => (currentValue < 0 && currentValue % 2 !== 0 ? currentValue + accumulator : accumulator), 0);
console.log(sumfOfAllNegativeNum);

const letters = ["a", "l", "p", "h", "a", "b", "e", "t"]
const concatenateLetters = letters.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(concatenateLetters);
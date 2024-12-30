const words = ["apple", "banana", "kiwi", "orange", "grape"];

const longestWord = words.reduce((accumulator, currentValue) => (currentValue.length > accumulator.length ? currentValue : accumulator), words[0]);
console.log(longestWord);

const numbers = [10, 5, 8, 20, 15];

const minimumValue = numbers.reduce((accumulator, currentValue) => (currentValue < accumulator ? currentValue : accumulator), numbers[0]);
console.log(minimumValue);

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

const totalWordsLength = wordsLength.reduce((accumulator, currentValue) => (currentValue.length + accumulator), 0)
console.log(totalWordsLength);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const countEvenNum = nums.reduce((accumulator, currentValue) => (currentValue % 2 === 0 ? accumulator + 1 : accumulator), 0);
console.log(countEvenNum);

const wordsCaps = ["hello", "world", "how", "are", "you"];

const wordsCapsConcatenate = wordsCaps.reduce((accumulator, currentValue) => accumulator + " " + currentValue.charAt(0).toUpperCase() + currentValue.slice(1), "")
console.log(wordsCapsConcatenate);

const numsAvg = [10, 15, 20, 25, 30];

const calculateAvg = numsAvg.reduce((accumulator, currentValue) => (accumulator + currentValue / numsAvg.length), 0)
console.log(calculateAvg);

const numbers1 = [1, 2, 3, 4, 5];

const sumOfSqaureOfNumbers1 = numbers1.reduce((accumulator, currentValue) => (accumulator + (currentValue * currentValue)), 0)
console.log(sumOfSqaureOfNumbers1);

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];

const wordCount = stationeryWords.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
    return accumulator;
}, {});
console.log(wordCount);

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];

const wordCountLetter = wordsLetter.reduce((accumulator, currentValue) => {
    accumulator[currentValue.charAt(0)] = (accumulator[currentValue.charAt(0)] || 0) + 1
    return accumulator;
}, {});
console.log(wordCountLetter);

const numPositive = [-2, 3, 4, -5, 6];

const productOfPositiveNum = numPositive.reduce((accumulator, currentValue) => (currentValue > 0 ? accumulator * currentValue : accumulator), 1);
console.log(productOfPositiveNum);
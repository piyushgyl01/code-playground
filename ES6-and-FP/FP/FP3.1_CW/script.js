const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
};
console.log(sum);

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumOfNumbers);

const stringsArray = ["Hello", " World", "!"];

const combinedString = stringsArray.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(combinedString)

const numbersArray = [10, 5, 8, 20, 15];

const maxNum = numbersArray.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator), numbersArray[0])
console.log(maxNum)

const fruits = ["apple", "banana", "apple", "orange", "kiwi", "kiwi"];

const wordCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
    return accumulator
}, {});
console.log(wordCount);
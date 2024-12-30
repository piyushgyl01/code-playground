console.log("A5.7_CW");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

let numbersArrway = [5, 12, 7, 25, 18, 3];

function printOrginalArray() {
    console.log("Orignal Array: ", numbersArrway);
} 

printOrginalArray();

console.log("---- ---- ----");
console.log("1.2")

function add10ToArray() {
    let newArray = [];
    for (let i = 0; numbersArrway.length > i; i++) {
        newArray.push(numbersArrway[i] + 10);
    }
    return newArray
}

console.log("New array added with a ten: ", add10ToArray())

console.log("---- ---- ----");
console.log("1.3")

function convertOddToEven() {
    let convertedArray = [];
    for(let i = 0; i < numbersArrway.length; i++) {
        if (numbersArrway[i] % 2 !== 0) {
            convertedArray.push(numbersArrway[i] + 1);
        } else {
            convertedArray.push(numbersArrway[i]);
        }
    }
    return convertedArray;
}

console.log(convertOddToEven())

console.log("---- ---- ----");
console.log("1.4")

function findLargestNumber(numbers) {
    let largestNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNum) {
            largestNum = numbers[i];
        }
    }
    return largestNum;
}

console.log("Largest Number: ", findLargestNumber(numbersArrway));
console.log("A5.7_HW1");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

let numbersArrway = [22, 35, 18, 47, 50, 63];

function printOrginalArray() {
    console.log("Orignal Array: ", numbersArrway);
} 

printOrginalArray();

console.log("---- ---- ----");
console.log("1.2")

function multiplyNumbersBy2() {
    let newArray = [];
    for (let i = 0; numbersArrway.length > i; i++) {
        newArray.push(numbersArrway[i] * 2);
    }
    return newArray
}

console.log("New array after mutliplying by 2: ", multiplyNumbersBy2())

console.log("---- ---- ----");
console.log("1.3")

function convertEvenToOdd() {
    let convertedArray = [];
    for(let i = 0; i < numbersArrway.length; i++) {
        if (numbersArrway[i] % 2 === 0) {
            convertedArray.push(numbersArrway[i] + 1);
        } else {
            convertedArray.push(numbersArrway[i]);
        }
    }
    return convertedArray;
}

console.log(convertEvenToOdd())

console.log("---- ---- ----");
console.log("1.4")

function findSmallestNumber(numbers) {
    let smallestNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNum) {
            smallestNum = numbers[i];
        }
    }
    return smallestNum;
}

console.log("Smallest Number: ", findSmallestNumber(numbersArrway));
console.log("A5.7_HW2");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

let numbersArrway = [33, 57, 24, 49, 52, 66];

function printOrginalArray() {
    console.log("Orignal Array: ", numbersArrway);
} 

printOrginalArray();

// console.log("---- ---- ----");
// console.log("1.2")

// function divisibleNumberBy3() {
//     let newArray = [];
//     for (let i = 0; numbersArrway.length > i; i++) {
//         if (numbersArrway[i] % 3 === 0) {
//             newArray.push(numbersArrway[i]);
//         }
//     }
//     return newArray
// }

// console.log("Divisible number by 3: ", divisibleNumberBy3())
console.log("---- ---- ----");

console.log("1.2")

function numbersDividedBy3() {
    let newArray = [];
    for (let i = 0; numbersArrway.length > i; i++) {
        newArray.push(numbersArrway[i] / 3);
    }
    return newArray
}

console.log("Numbers divied by 3: ", numbersDividedBy3())

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

function findLargestNumberDivisibleBy5(numbers) {
    let largestNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNum && numbers[i] % 5 === 0) {
            largestNum = numbers[i];
        } else {
            largestNum = 0;
        }
    }
    return largestNum;
}

console.log("Largest Number Divisible by 5: ", findLargestNumberDivisibleBy5(numbersArrway));
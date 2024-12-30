const array = [5, 12, 7, 25, 18, 3];

function printArray(arr) {
    console.log(arr);
}
printArray(array);

function addTen(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 10)
    }
    console.log(result);
}
addTen(array);

function convertOddstoEven(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i] + 1);
        } else {
            result.push(arr[i]);
        }
    }
    console.log(result);
}
convertOddstoEven(array);

function filterDivisibleByTwo(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    console.log(result)
}
filterDivisibleByTwo(array);

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sumArray(array);
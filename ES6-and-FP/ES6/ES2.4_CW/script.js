const calculateSum = (numbersArr) => {
    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        sum = sum + numbersArr[i];
    }
    return sum
}

console.log(calculateSum([1, 2, 3, 4, 5]));

const reverseString = (str) => {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString + str[i];
    }
    return reverseString;
}
console.log(reverseString("hello"));
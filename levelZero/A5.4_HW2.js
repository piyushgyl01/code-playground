console.log("A5.4_HW2");
console.log("---- ---- ----");

console.log("1.1");
function averageOfNumbersUptoN(n) {
    let average = 0;
    for (let i = 1; i <= n; i++) {
        average = average + i / n;
    }
    return average;
}

console.log(averageOfNumbersUptoN(10));

console.log("---- ---- ----");

console.log("1.2");
function sumOfEvenNumbersGreaterThanSixUptoN(n) {
    let sum = 0;
    for (let i = 7; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfEvenNumbersGreaterThanSixUptoN(12));

console.log("---- ---- ----");

console.log("1.3");
function sumDivisibleBy8UptoN(n) {
    let sumOfNumbersDivisibleBy8 = 0;
    for (let i = 10; i <= n; i++) {
        if (i % 8 === 0) {
            sumOfNumbersDivisibleBy8 = sumOfNumbersDivisibleBy8 + i;
        }
    }
    console.log("Sum of numbers divisible by 8: " + sumOfNumbersDivisibleBy8)
}

sumDivisibleBy8UptoN(40);

console.log("---- ---- ----");

console.log("1.3");
function sumEvenAndOddUptoN(n) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sumOfEvenNumbers = sumOfEvenNumbers + i;
        }
        if (i % 2 != 0) {
            sumOfOddNumbers = sumOfOddNumbers + i;
        }
    }
    console.log("Sum of even numbers: " + sumOfEvenNumbers)
    console.log("Sum of odd numbers: " + sumOfOddNumbers)
}

sumEvenAndOddUptoN(30);
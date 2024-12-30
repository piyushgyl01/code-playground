console.log("A5.4_HW1");
console.log("---- ---- ----");

console.log("1.1");
function sumUptoN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumUptoN(10));

console.log("---- ---- ----");

console.log("1.2");
function sumOfEvenNumbersUptoN(n) {
    let sum = 0;
    for (let i =1; i <= n; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumOfEvenNumbersUptoN(9));

console.log("---- ---- ----");

console.log("1.3");
function sumDivisibleBy5And7UptoN(n) {
    let sumOfNumbersDivisibleBy5 = 0;
    let sumOfNumbersDivisibleBy7 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            sumOfNumbersDivisibleBy5 = sumOfNumbersDivisibleBy5 + i;
        }
        if (i % 7 === 0) {
            sumOfNumbersDivisibleBy7 = sumOfNumbersDivisibleBy7 + i;
        }
    }
    console.log("Sum of numbers divisible by 5: " + sumOfNumbersDivisibleBy5)
    console.log("Sum of numbers divisible by 7: " + sumOfNumbersDivisibleBy7)
}

sumDivisibleBy5And7UptoN(35);

console.log("---- ---- ----");

console.log("1.4");
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(7));